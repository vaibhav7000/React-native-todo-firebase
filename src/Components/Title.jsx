import {  } from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({title = "Empty Title", style = {}}) => {

    return (
        <View>
            <Text style={[style, {

            }]}>
                {title}
            </Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({

})