import { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTodo } from "../Context/TodoContext";

import { Check, Trash } from "lucide-react-native";
import { remove, update } from "../Reducers/TodoReducer";

const SingleTodoView = props => {
    const { item } = props;
    const { dispatch } = useTodo();

    const months = useMemo(function () {
        return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }, []);

    return (
        <View style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: '#292929ff',
            color: 'white',
            rowGap: 20,
            borderRadius: 20
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View style={{
                    padding: 6,
                    borderRadius: 6,
                    backgroundColor: '#904bebff',
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        textTransform: "capitalize"
                    }}>
                        {item.todoStatus.priority}
                    </Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(update({
                            ...item,
                            completed: !item.completed,
                        }));
                    }} activeOpacity={0.5} style={{
                        backgroundColor: 'white',
                        borderRadius: "50%",
                        padding: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        height: 24,
                        width: 24,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#272727ff"
                    }}>
                        {item.completed && <Check size={20} />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        dispatch(remove({
                            deadline: item.deadline
                        }))
                    }} activeOpacity={0.5} style={{
                        padding: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        height: 24,
                        width: 24,
                    }}>
                        <Trash size={20} color={"red"}  />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                rowGap: 10
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 22,
                    fontWeight: "600"
                }}>{item.title}</Text>
                <Text style={{
                    color: '#8e8a8aff',
                    fontSize: 16,
                    fontWeight: "500"
                }}>{item.description}</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",

            }}>
                <Text style={{
                    color: '#8e8a8aff'
                }}>
                    {`Deadline: ${item.deadline.getDate()}-${months[item.deadline.getMonth()]}-${item.deadline.getFullYear()}`}
                </Text>

                <Text style={{
                    color: '#8e8a8aff',
                    textTransform: 'capitalize'
                }}>
                    {`${item.todoStatus.type}`}
                </Text>
            </View>
        </View>
    )
}

export default SingleTodoView;