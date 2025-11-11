import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import useSafeAreaStyles from "../../utils/Insets";
import CustomTextInputView from "../../Components/TextInput";


const SignUp = props => {
    const { navigation } = props;

    const itemsRef = useRef(null);

    const [hide, setHide] = useState(true);

    const inputData = useMemo(function () {
        return [{
            title: 'Enter your email',
            type: 'email',
            placeholder: 'Enter your email...'
        }, {
            title: 'Enter your password',
            type: 'password',
            placeholder: 'Enter your password...'
        }]
    }, []);

    useEffect(function () {

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
                            const { type, placeholder, title } = data;
                            const styles = {
                                backgroundColor: "#292929ff",
                                borderRadius: 20,
                                padding: 20
                            };

                            return (
                                <View key={title} style={{

                                }}>
                                    {
                                        index === 0 ? hide && <CustomTextInputView ref={node => {
                                            const map = getMap();
                                            map[title] = node;

                                            return () => {
                                                // this will be called when the node will be removed from the View => View will re-render and useRef current value persist between the re-renders and 
                                                delete map[title]
                                            };
                                        }} style={{
                                            ...styles
                                        }} placeholder={placeholder} placeholderTextColor={'#acaaaaff'} /> : <CustomTextInputView ref={node => {
                                            const map = getMap();
                                            map[title] = node;

                                            return () => delete map[title];
                                        }} style={{
                                            ...styles
                                        }} placeholder={placeholder} placeholderTextColor={'#acaaaaff'} />
                                    }
                                </View>
                            )
                        })
                    }
                </View>

                <TouchableOpacity activeOpacity={0.5} onPress={() => {

                }} style={{
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        color: 'white',
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