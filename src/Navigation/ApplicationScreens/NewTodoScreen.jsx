import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Calendar, Plus } from "lucide-react-native";

const NewTodoScreen = () => {

    const itemsRef = useRef(null);
    const [show, setShow] = useState(false);

    const currentDate = useMemo(function() {
        return new Date();
    })

    const items = useMemo(function () {
        return [{
            title: "Task name",
            placeholder: "Write your task here..."
        }, {
            title: "Description",
            placeholder: "Add more details or notes",
        }, {
            title: "Due date & time",
            placeholder: "Today-18:00"
        }, {
            title: "Add subtasks",
            placeholder: "Subtask title"
        }];
    }, []);

    const getMap = useCallback(function () {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }

        return itemsRef.current;
    }, []);

    return (
        <View style={[useSafeAreaStyles(), {
            rowGap: 24,
        }]}>
            {
                items.map(function (item, index) {
                    const { title, placeholder } = item;
                    const specificInput = title === 'Due date & time' ? true : false;

                    return (
                        <View key={title} style={{
                            rowGap: 12
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: "600"
                            }}>{title}</Text>

                            <View style={{
                                position: 'relative',
                            }}>
                                <TextInput onPressIn={specificInput ? () => {
                                    setShow(true);
                                } : undefined} readOnly={specificInput} on placeholderTextColor={"#acaaaaff"} placeholder={placeholder} style={{
                                    backgroundColor: '#292929ff',
                                    borderRadius: 20,
                                    paddingHorizontal: 16,
                                    paddingVertical: 16,
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: "500"
                                }} ref={element => {
                                    const map = getMap();
                                    map.set(title, element);

                                    return () => map.delete(title);
                                }} />

                                {
                                    title === 'Due date & time' && (<View style={{
                                        position: 'absolute',
                                        zIndex: 1,
                                        right: 10,
                                        top: "23%"
                                    }}>
                                        <Calendar color={"#acaaaaff"} size={22} onPress={() => {
                                            setShow(prev => !prev);
                                        }} />
                                    </View>)
                                }

                                {show && title === 'Due date & time' && <DateTimePicker style={{
                                    marginTop: 10
                                }} value={currentDate} mode="time" is24Hour={true} onChange={(event, selectedDate) => {
                                    console.log(event);
                                    console.log(selectedDate);
                                }} />}
                            </View>
                        </View>
                    )
                })
            }

        </View>
    )
}


export default NewTodoScreen;