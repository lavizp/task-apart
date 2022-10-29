import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAOg9Sbrnjf8BZW7qEZhKc3U9o9UDla-PI",

    authDomain: "task-apart.firebaseapp.com",
  
    projectId: "task-apart",
  
    storageBucket: "task-apart.appspot.com",
  
    messagingSenderId: "166937638769",
  
    appId: "1:166937638769:web:83f875df370f8c4565e8d0"
  
  
});

export const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();
export default db;