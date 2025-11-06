import {  } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewTodoScreen from "./ApplicationScreens/NewTodoScreen";
import TodoScreenRootStack from "./ApplicationScreens/TodoScreens/TodoScreen";
import SearchTodoScreen from "./ApplicationScreens/SearchTodoScreen";

const ApplicationRootStack = () => {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator initialRouteName="AllTodo" screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="NewTodo" component={NewTodoScreen} />
            <Tabs.Screen name="AllTodo" component={TodoScreenRootStack} />
            <Tabs.Screen name="SearchTodo" component={SearchTodoScreen} />
        </Tabs.Navigator>
    )

}

const AuthRootStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

        </Stack.Navigator>
    )
}


const Navigation = () => {

    const isAuth = true;

    return (
        <NavigationContainer>
            {isAuth ? <ApplicationRootStack /> : <AuthRootStack />}
        </NavigationContainer>
    )
}

export default Navigation;