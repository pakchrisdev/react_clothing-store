import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2Ax654BS_e3TUw8fP9wys_pu41TRzKfk",
    authDomain: "react-clothingstore.firebaseapp.com",
    databaseURL: "https://react-clothingstore.firebaseio.com",
    projectId: "react-clothingstore",
    storageBucket: "",
    messagingSenderId: "519482104532",
    appId: "1:519482104532:web:8b0aef531cb14fec"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    // console.log(snapShot);
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err){
            console.log('error creating user', err.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;