import {  } from "react";
import {  } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TodoScreenRootStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen />
        </Stack.Navigator>
    )
}


export default TodoScreenRootStack;