import {  } from "react";
import {  } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllTodoScreen from "./AllTodoScreen";
import SpecificTodo from "./SpecificTodo";


const TodoScreenRootStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="AllTodo" screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="AllTodo" component={AllTodoScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="SpecificTodo" component={SpecificTodo} />
        </Stack.Navigator>
    )
}


export default TodoScreenRootStack;