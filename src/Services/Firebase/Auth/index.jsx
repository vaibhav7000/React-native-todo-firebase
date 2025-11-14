import { firebase } from "@react-native-firebase/auth";

const firebaseAuth = firebase.auth(); // this will pick the default file present in ios and android and provide us an instance that will do the rest for auth from our side
const createNewUserWithEmailPassword = async(email, password) => {
    try {
        const user = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        return user;
    } catch(e) {
        throw e;
    }
}

const signOut = async() => {
    try {
        const response = await firebaseAuth.signOut();
        return true;
    } catch (error) {
        throw e;
    }
}

function getMeaningFullErrorStatus(e) {
    const message = e.message;
    let output = null;

    switch(message) {
        case "[auth/email-already-in-use] The email address is already in use by another account.":
            output = "Email already exist in the Database"
            break;
    }

    return output;
}


export default firebaseAuth;

export {
    createNewUserWithEmailPassword,
    signOut,
    getMeaningFullErrorStatus
}

/*

    Each Service ( Auth, FireStore ) uses the core firebase package i.e @react-native-firebase/app, hence we require to install the base-module (@react-native-firebase/app) and then install the packge that we want to use.


    Declaring auth is just like the creating an instance that will access the google-service.json file from android and ios and will help to do perform the auth services on the project created,

    Single App can have multiple instance of the auth or firestore each having different credential that can be done using initialApp and then providing credentials and providing this to auth

    Single App can use different firebase projects, hence a single service can have multiple instances that will pick up different credentials default it picks the config from ios and android, else 
        you have to use firebase.auth().initializeApp with credentials provided

*/

