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

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;