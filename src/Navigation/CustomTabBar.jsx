import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { Calendar, Plus, Search } from "lucide-react-native";
import {  } from "react";
import { View, Text } from "react-native";


const CustomTabBar = ({state, navigation, descriptors, insets}) => {
    // console.log(state);
    // console.log(descriptors);

    const { buildHref } = useLinkBuilder();

    const { index } = state;


    return (
        <View style={{
            position: "absolute",
            bottom: 0 + insets.bottom,
            left: 0 + insets.left,
            right: 0 + insets.right,
            height: 65,
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            
            <View style={{
                height: "100%",
                width: "50%",
                borderRadius: 30,
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: 14,
                backgroundColor: 'rgba(200, 200, 200, 0.6)',

            }}>

                {
                    state.routes.map(function(screen, i) {
                        const { options } = descriptors[`${screen["key"]}`];

                        const isFocused = i === index;

                        const tabBarLabel = options?.tabBarLabel ? options.tabBarLabel : options?.title ? options.title : screen.name

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: screen.key,
                                canPreventDefault: true
                            })

                            if(!isFocused && !event.defaultPrevented) {
                                navigation.navigate(screen.name, screen.params);
                            }
                        };

                        let element = undefined;

                        switch(screen.name) {
                            case "AllTodo":
                                element = <Calendar size={36} color={isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor} />
                                break;
                            case "NewTodo":
                                element = <Plus size={36} color={isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor} />
                                break;
                            case "SearchTodo":
                                element = <Search size={36} color={isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor} />
                                break;
                        }

                        return (
                            <PlatformPressable key={screen.key} href={buildHref(screen.name, screen.params)} testID={options.tabBarButtonTestID} onPress={onPress} style={{padding: 8, backgroundColor: isFocused ? '#904bebff' : '#e9e6edff', borderRadius: "50%"}}>
                                {element}
                            </PlatformPressable>
                        )

                    })
                }

            </View>

        </View>
    )
}

export default CustomTabBar;

// Every time when the tab is changed, the tabBar is again computed based on the the active one
// The navigation bar is different for each screen, => every time new screen is pushed to the Tab Navigator, each screen gets opened with the Navigation-bar