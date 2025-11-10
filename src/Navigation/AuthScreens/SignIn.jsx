import {  } from "react";
import { Text, View } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";

const SignIn = props => {

    return (
        <View style={[useSafeAreaStyles(), {
            flex: 1,
            backgroundColor: "red"
        }]}>
            <Text style={{
                color: 'white'
            }}>
                Signin
            </Text>
        </View>
    )
}

export default SignIn;