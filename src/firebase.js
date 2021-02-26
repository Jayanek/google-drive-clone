import firebase from "firebase/app";
import "firebase/auth";

const app =  firebase.initializeApp({
    apiKey: "AIzaSyDAUBoUV5nuSao8gvUzBYIRkQkHtc-Pfc8",
    authDomain: "gdclone-development.firebaseapp.com",
    projectId: "gdclone-development",
    storageBucket: "gdclone-development.appspot.com",
    messagingSenderId: "308756104307",
    appId: "1:308756104307:web:4c2cd14d1a1605cca99606"
});

export default app;

export const auth = app.auth()

