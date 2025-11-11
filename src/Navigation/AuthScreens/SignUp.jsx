import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";
import CustomTextInputView from "../../Components/TextInput";
import { Icon, Eye, EyeClosed } from "lucide-react-native";
import { createNewUserWithEmailPassword } from "../../Services/Firebase/Auth";

const SignUp = props => {
    const { navigation } = props;

    const itemsRef = useRef(null);


    const [showPassword, setShowPassword] = useState(false);

    const inputData = useMemo(function () {
        return [{
            title: 'Enter your email',
            keyboardType: 'email-address',
            placeholder: 'Enter your email...'
        }, {
            title: 'Enter your password',
            keyboardType: 'default',
            placeholder: 'Enter your password...'
        }]
    }, []);

    const signUp = useCallback(async function() {
        try {
            await createNewUserWithEmailPassword("vchawla7000@gmail.com", "qwerty098");
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(function () {
        if(!itemsRef.current) return;
        // itemsRef.current[inputData[0].title].focus();
    }, []);


    const getMap = useCallback(function () {
        if (!itemsRef.current) {
            itemsRef.current = {};
        }

        return itemsRef.current;
    }, []);

    return (
        <View style={[useSafeAreaStyles(), {
            alignItems: 'center', // alignItems: "center / flex-start / flex-end" in react-native does not allow the children to grow along the cross-axis using flex: 1, you can try with width: "100%" ( when flexDirection: "column" ) / height: "100%" (when flexDirection: "row")
            flexDirection: "row",
            flex: 1
        }]}>

            <View style={{
                flex: 1,
                rowGap: 14,
                backgroundColor: "black",
            }}>
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
                        inputData.map((data, index) => {
                            const { keyboardType, placeholder, title } = data;

                            return (
                                <View key={title} style={{

                                }}>
                                    {
                                        index === 0 ? <View style={{
                                            backgroundColor: "#292929ff",
                                            borderRadius: 20,
                                            padding: 20,
                                        }}><CustomTextInputView ref={node => {
                                            const map = getMap();
                                            map[title] = node;

                                            return () => {
                                                // this will be called when the node will be removed from the View => View will re-render and useRef current value persist between the re-renders and 
                                                delete map[title]
                                            };
                                        }} style={{
                                            color: 'white',
                                            fontSize: 20,
                                            fontWeight: "500"
                                        }} placeholder={placeholder} placeholderTextColor={'#acaaaaff'} /></View> : <View style={{
                                            backgroundColor: "#292929ff",
                                            borderRadius: 20,
                                            padding: 20,
                                            flexDirection: "row"
                                        }}><CustomTextInputView secureTextEntry={!showPassword} keyboardType={keyboardType} ref={node => {
                                            const map = getMap();
                                            map[title] = node;

                                            return () => delete map[title];
                                        }} style={{
                                            flex: 1,
                                            color: 'white',
                                            fontSize: 20,
                                            fontWeight: "500"
                                        }} placeholder={placeholder} placeholderTextColor={'#acaaaaff'} />
                                        
                                        <TouchableOpacity onPress={() => {
                                            setShowPassword(prev => !prev);
                                        }} activeOpacity={0.5}>
                                            {
                                                showPassword ? <Eye color={"white"} /> : <EyeClosed color={"white"} />
                                            }
                                        </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                            )
                        })
                    }
                </View>

                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    signUp();
                }} style={{
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
                            fontSize: 16,
                            fontWeight: "600",
                            textDecorationColor: 'white',
                            textDecorationLine: 'underline',
                            textDecorationStyle: 'solid'
                        }}>
                            {`Already have account? `}
                        </Text>

                        <TouchableOpacity onPress={() => {
                            navigation.replace("SignIn");
                        }} style={{

                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontWeight: "600"
                            }}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp;

/*
    alignItems: "center / flex-start / flex-end" stops the View (any) to get full avaiable space along the cross-axis using flex: 1, 
    justifyContent: "center" does not stops the View (any) to get the avaiable space along the main-axis
*/