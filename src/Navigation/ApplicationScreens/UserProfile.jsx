import {  } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { signOut } from "../../Services/Firebase/Auth";
import useSafeAreaStyles from "../../utils/Insets";


const UserProfile = () => {

    return (
        <View style={[useSafeAreaStyles(),{
            flex: 1,
        }]}>
            <TouchableOpacity onPress={() => {
                signOut();
            }}>
                <Text style={{
                    color: 'white'
                }}>
                    Signout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserProfile;