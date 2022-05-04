import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBmNpV6geUkxssfGmOQ5rmNeZk2AB3ivo",
    authDomain: "my-netflix-clone-82036.firebaseapp.com",
    projectId: "my-netflix-clone-82036",
    storageBucket: "my-netflix-clone-82036.appspot.com",
    messagingSenderId: "718421300246",
    appId: "1:718421300246:web:97904d3c204b0c374cd137",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
};
export default db;
