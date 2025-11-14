import { useCallback, useMemo, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";
import CustomTextInputView from "../../Components/TextInput";
import { Eye, EyeClosed } from "lucide-react-native";

const SignIn = props => {

    const inputItemsRef = useRef(null);

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const getMap = useCallback(function() {
        if(!inputItemsRef.current) {
            inputItemsRef.current = {};
        }

        return inputItemsRef.current;
    }, []);


    const [showPassword, setShowPassword] = useState(true);

    const inputFields = useMemo(function() {
        return [{
            title: "Enter you username",
            keyboardType: "default",
            placeholder: "Enter username...",
            value: usernameRef,
        }, {
            title: "Enter your email",
            keyboardType: "email-address",
            placeholder: "Enter your email...",
            value: emailRef,
        }, {
            title: "Enter your password",
            keyboardType: "visible-password",
            placeholder: "Enter your password...",
            value: passwordRef
        }]
    }, []);


    return (
        <View style={[useSafeAreaStyles(), {
            flex: 1,
            justifyContent: 'center',
            rowGap: 14,
        }]}>

            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: "600"
            }}>
                SignUp
            </Text>

            <View style={{
                rowGap: 10
            }}>
                {
                    inputFields.map(function(input) {
                        const { title, value, keyboardType, placeholder } = input;
                        const secureEntry = keyboardType === "visible-password";
                        console.log(secureEntry, title);
                        return (
                            <View style={{
                                backgroundColor: "#292929ff",
                                borderRadius: 20,
                                padding: 20,
                                flexDirection: "row"
                            }} key={title}>
                                <CustomTextInputView secureEntry={secureEntry ? showPassword : false} placeholderTextColor={'#acaaaaff'} style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: "500",
                                    flex: 1
                                }} placeholder={placeholder} onChangeText={(t) => value.current = t} keyboardType={keyboardType} ref={el => {
                                    const currentMap = getMap();
                                    currentMap[title] = el;

                                    return () => delete currentMap[title]
                                }} />

                                {
                                    secureEntry ? <View>
                                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                            setShowPassword(prev => !prev)
                                        }}>
                                            {showPassword ? <Eye color={'white'} /> : <EyeClosed color={'white'} />}
                                        </TouchableOpacity>
                                    </View> : null
                                }
                            </View>
                        )
                    })
                }
            </View>

            <TouchableOpacity style={{
                alignSelf: 'center',
                    backgroundColor: "white",
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                    borderRadius: 10
            }}>
                <Text style={{
                    color: 'black',
                        fontWeight: "600",
                        fontSize: 20,
                }}>
                    Let's go
                </Text>
            </TouchableOpacity>

            <View style={{
                justifyContent: 'center',
                flexDirection: "row"
            }}>
                <Text style={{
                    color: 'white',
                            fontSize: 18,
                            fontWeight: "600",
                            textDecorationColor: 'white',
                            textDecorationLine: 'underline',
                            textDecorationStyle: 'solid'
                }}>
                    {`Already have account?`}
                </Text>

                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: "600"
                    }}>
                        {` SignIn`}
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SignIn;