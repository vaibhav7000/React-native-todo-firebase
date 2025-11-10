import { useState, useMemo, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import useSafeAreaStyles from "../../../utils/Insets";
import PillsView from "../../../Components/PillsView";
import { useTodo } from "../../../Context/TodoContext";
import SingleTodoView from "../../../Components/SingleTodo";
import { Icon } from "lucide-react-native";

import {bellConciergeDot} from "@lucide/lab"
import { useNavigation } from "@react-navigation/native";

const AllTodoScreen = () => {
    const [activePill, setActivePill] = useState('All');
    const { todos } = useTodo();

    const { paddingBottom, paddingLeft, paddingRight, paddingTop } = useSafeAreaStyles();

    const navigation = useNavigation();

    const data = useMemo(function () {
        return ["All", "Today", "Upcoming", 'Personal', 'Work', 'High', 'Low']
    }, []);

    const getTodaysTasks = useCallback(function () {
        return todos.filter(todo => {
            const currentDate = new Date();
            const todoDate = todo.deadline;

            if (currentDate.getDate() === todoDate.getDate() && currentDate.getMonth() === todoDate.getMonth() && currentDate.getFullYear() === todoDate.getFullYear()) {
                return true;
            }
        })
    }, [todos]);

    const currentTime = useMemo(function () {
        const hours = new Date().getHours();

        if (hours >= 6 && hours < 12) {
            return "Good Morning 🌅"
        } else if (hours >= 12 && hours < 17) {
            return "Good Afternoon 🌞"
        } else if (hours >= 17 && hours < 20) {
            return "Good Evening 🌇"
        } else {
            return "Good Night 🌛"
        }
    }, []);

    const todayTasks = useCallback(function () {
        return getTodaysTasks().length;
    }, [todos]);


    const finalTodosRender = useMemo(function () {
        if (activePill === data[0]) {
            return todos;
        }

        if (activePill === data[1]) {
            return getTodaysTasks();
        }

        if (activePill === data[2]) {
            return todos.filter(todo => {
                const currentDate = new Date();
                const todoDate = todo.deadline;

                if (currentDate.getFullYear() < todoDate.getFullYear()) {
                    return true;
                } else {
                    if (currentDate.getFullYear() === todoDate.getFullYear()) {
                        if (currentDate.getMonth() < todoDate.getMonth()) {
                            return true;
                        } else {
                            if (currentDate.getMonth() === todoDate.getMonth()) {
                                if (currentDate.getDate() < todoDate.getDate()) {
                                    return true;
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return false;
                    }
                }
            })
        }

        if (activePill === data[3] || activePill === data[4]) {
            return todos.filter(todo => {
                const { todoStatus } = todo;

                if (todoStatus.type === data[3] && activePill === data[3]) {
                    return true;
                }

                if (todoStatus.type === data[4] && activePill === data[4]) {
                    return true;
                }

                return false;
            })
        }

        if (activePill === data[5] || activePill === data[6]) {
            return todos.filter(todo => {
                const { todoStatus } = todo;

                if (todoStatus.priority === data[5] && activePill === data[5]) {
                    return true;
                }

                if (todoStatus.priority === data[6] && activePill === data[6]) {
                    return true;
                }

                return false;
            })
        }
    }, [activePill, todos]);


    return (
        <View style={[, {
            flex: 1,
            rowGap: 30,
            backgroundColor: "black",
            paddingLeft, paddingRight, paddingTop
        }]}>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View style={{
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: 'center'
                }}>

                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: "50%",
                        backgroundColor: "#6e6e6eff"
                    }}>

                    </View>

                    <View style={{
                        columnGap: 4
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: "600"
                        }}>
                            {`${currentTime}`}
                        </Text>

                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: "600"
                        }}>
                            {`${'Benjamin Haris'}`}
                        </Text>
                    </View>

                </View>


                <View style={{
                    height: 60,
                    width: 60,
                    borderRadius: "50%",
                    backgroundColor: "#6e6e6eff",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Icon iconNode={bellConciergeDot} color={"black"} />
                </View>
            </View>


            <View style={[{
                rowGap: 30,
                flex: 1
            }]}>

                <View>
                    <PillsView data={data} activePill={activePill} setActivePill={setActivePill} />
                </View>

                <View style={{
                    flex: 1
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 20
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 28,
                            fontWeight: "700"
                        }}>Todo Tasks</Text>

                        <TouchableOpacity onPress={() => {

                        }} activeOpacity={0.5}>
                            <Text style={{
                                color: '#904bebff',
                                fontSize: 16,
                                fontWeight: "500"
                            }}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList showsVerticalScrollIndicator={false} bounces={false} data={finalTodosRender} keyExtractor={(item) => Date.parse(item.deadline)} extraData={activePill} renderItem={({ item, index, separators }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                navigation.navigate("SpecificTodo")
                            }} style={{
                                marginBottom: index === finalTodosRender.length - 1 ? 65 + paddingBottom : 10
                            }}>
                                <SingleTodoView item={item} />
                            </TouchableOpacity>
                        )
                    }} style={{
                        borderRadius: 20
                    }} contentContainerStyle={{
                    }} />
                </View>
            </View>

        </View>
    )
}

export default AllTodoScreen;

const styles = StyleSheet.create({

})