import { forwardRef } from "react";
import { TextInput } from "react-native";

const CustomTextInputView = forwardRef((props, ref) => {

    return (
        <TextInput ref={element => {
            ref.current = element
        }} />
    )
})

export default CustomTextInputView;