import {  } from "react";
import {  } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllTodoScreen from "./AllTodoScreen";
import SpecificTodo from "./SpecificTodo";


const TodoScreenRootStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Todos" screenOptions={{
            headerShown: true,
            contentStyle: {
                backgroundColor: "black"
            }
        }}>
            <Stack.Screen name="Todos" component={AllTodoScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="SpecificTodo" component={SpecificTodo} options={({route}) => ({
                headerStyle: {
                    backgroundColor: "black"
                }
            })} />
        </Stack.Navigator>
    )
}


export default TodoScreenRootStack;