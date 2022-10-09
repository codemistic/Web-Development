import firebase from "firebase";

const firebaseConfig = {
	apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};
// replace the above with your own firebase config

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
