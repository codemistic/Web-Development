
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBh-gqKfe9Imz4uQ2iDgxNpUcP1H7ex1-0",
    authDomain: "linkedin-clone-f318d.firebaseapp.com",
    projectId: "linkedin-clone-f318d",
    storageBucket: "linkedin-clone-f318d.appspot.com",
    messagingSenderId: "229916494215",
    appId: "1:229916494215:web:d0ca930999063ed8932b22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};