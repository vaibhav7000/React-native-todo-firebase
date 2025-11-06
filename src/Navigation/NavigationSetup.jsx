import {  } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ApplicationRootStack = () => {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>

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