import { forwardRef } from "react";
import { TextInput } from "react-native";

const CustomTextInputView = forwardRef((props, ref) => {

    return (
        <TextInput ref={ref} {...props} />
    )
})

export default CustomTextInputView;