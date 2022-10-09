import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAW8mG2updQzE409oX_ZwAiiwuFi6ocdMc",
	authDomain: "linkedin-clone-f4c26.firebaseapp.com",
	projectId: "linkedin-clone-f4c26",
	storageBucket: "linkedin-clone-f4c26.appspot.com",
	messagingSenderId: "139295384213",
	appId: "1:139295384213:web:abf89fe5bc93ee6c18719c",
};

// const firebaseConfig = {
// 	apiKey: "AIzaSyCy_jQ4x6YM_6iOgJV0lGTMQsRom7eNeNs",
// 	authDomain: "linkedin-clone-d177c.firebaseapp.com",
// 	projectId: "linkedin-clone-d177c",
// 	storageBucket: "linkedin-clone-d177c.appspot.com",
// 	messagingSenderId: "145153678349",
// 	appId: "1:145153678349:web:1a8071a8f7a8e6f65c8944",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
