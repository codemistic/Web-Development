import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAYCYXIbKISqkWa1UTqCK6bAU_RCtxdVzQ",
  authDomain: "drive-clone-455a1.firebaseapp.com",
  projectId: "drive-clone-455a1",
  storageBucket: "drive-clone-455a1.appspot.com",
  messagingSenderId: "810010726465",
  appId: "1:810010726465:web:a97d5b0d5cbc81f9b1b6c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

firebase.database().ref().set({
  name: "drive-clone-455a1",
})


export { auth, provider, db, storage }