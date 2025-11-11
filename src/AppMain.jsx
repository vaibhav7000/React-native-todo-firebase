import {  } from "react";
import {  } from "react-native";

import Navigation from "./Navigation/NavigationSetup";
import { NavigationContainer } from "@react-navigation/native";

const AppMain = () => {

    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}


export default AppMain;

/*
    Firebase provides various services like storage, authentication, crash-recording,
    Firebase provides different sdk / packages for different tech to use the above services

    Firebase is a set of cloud tools that provides ready-made solutions ( these solutions are related to the Backend hence Firebase is called as Backend-as-a-service provider ) for 
    1. Authentication -> Firebase Auth
    2. Database -> Cloud Firestore
    3. Storage -> Firebase storage
    4. Push Notifications
    5. Crash handling -> crashlatics
    etc

    Firebase is matained by Google that provides us ready-to-use backend services like Authentication, Storage, Database, Crash-reporting, Push Notification, ( these services are comes under the Backend-as-a-service )


    "major" command to use the firebase -> @react-native-firebase/app
    For Auth -> @react-native-firebase/auth
    For Database / Firestore -> @react-native-firebase/firestore
*/