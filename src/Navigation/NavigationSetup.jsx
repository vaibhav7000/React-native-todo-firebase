import { useEffect, useState } from "react";

import { Icon } from "lucide-react-native"
import { tabPlus, glassesSun } from "@lucide/lab"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewTodoScreen from "./ApplicationScreens/NewTodoScreen";
import TodoScreenRootStack from "./ApplicationScreens/TodoScreens/TodoScreen";
import SearchTodoScreen from "./ApplicationScreens/SearchTodoScreen";
import useSafeAreaStyles from "../utils/Insets";
import { Text, View } from "react-native";
import CustomTabBar from "./CustomTabBar";
import firebaseAuth from "../Services/Firebase/Auth";

import SignUp from "./AuthScreens/SignUp";
import SignIn from "./AuthScreens/SignIn";

const ApplicationRootStack = () => {
    const Tabs = createBottomTabNavigator();

    return (
        // ScreenOptions expects to get the object either directly provides that or through the function that will return the object
        <Tabs.Navigator initialRouteName="AllTodo" tabBar={(props) => <CustomTabBar {...props} />} screenOptions={({route}) => ({
            headerShown: false,
            sceneStyle: {
                backgroundColor: 'black',
                position: "relative"
            },
            tabBarStyle: {
                backgroundColor: "green"
            },
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'#353535ff',
            tabBarIcon: function (props) {
                const { name } = route;
                const { focused, color, size } = props;
                let iconName = glassesSun;

                if(name === 'NewTodo') {
                    iconName = tabPlus;
                } else if(name === 'AllTodo') {

                } else if(name === 'SearchTodo') {

                }
                return <Icon size={size} color={color} iconNode={iconName} />
            }
        })}>
            <Tabs.Screen name="AllTodo" component={TodoScreenRootStack} options={{
                // tabBarBadge: 3,
                // tabBarBadgeStyle: {
                //     backgroundColor: 'tomato',
                //     color: 'white'
                // },
            }} />

            <Tabs.Screen name="NewTodo" component={NewTodoScreen} options={{
                
            }}/>
            <Tabs.Screen name="SearchTodo" component={SearchTodoScreen} />
        </Tabs.Navigator>
    )

}

const AuthRootStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="SignUp" screenOptions={props => {
            const { route } = props;

            return {
                headerShown: false,
                contentStyle: {
                    backgroundColor: "black"
                }
            }
        }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}


const Navigation = () => {

    const [isAuth, setIsAuth] = useState(false);
    console.log(firebaseAuth.currentUser, "Hello 1");

    useEffect(function() {
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            if(user) {
                setIsAuth(true);
                return;
            }
            setIsAuth(false);
        });

        return unsubscribe;
    }, []);

    return (
        <>
            {isAuth ? <ApplicationRootStack /> : <AuthRootStack />}
        </>
    )
}

export default Navigation;