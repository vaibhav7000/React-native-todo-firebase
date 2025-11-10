import { useRef } from "react";
import { Text, View } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";
import CustomTextInputView from "../../Components/TextInput";


const SignUp = props => {
    const inputRef = useRef(null);

    return (
        <View style={[useSafeAreaStyles(), {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "yellow",
            flexDirection: "row",
            flex: 1
        }]}>

            <View style={{
                flex: 1,
                backgroundColor: "red"
            }}>
                <Text>SignUp</Text>
            </View>
        </View>
    )
}

export default SignUp;

/*
    alignItems: "center" stops the View (any) to get full avaiable space along the cross-axis using flex: 1, 
    justifyContent: "center" does not stops the View (any) to get the avaiable space along the main-axis
*/