import {  } from "react";
import { View, Text } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";


const NewTodoScreen = () => {

    return (
        <View style={[useSafeAreaStyles()]}>
            <Text>
                Add Todo
            </Text>
        </View>
    )
}


export default NewTodoScreen;