// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD6fli2g5Cec5nTjbzgn3RNVQDPgWLFxU",
  authDomain: "real-time-chat-f91b4.firebaseapp.com",
  projectId: "real-time-chat-f91b4",
  storageBucket: "real-time-chat-f91b4.appspot.com",
  messagingSenderId: "462390929454",
  appId: "1:462390929454:web:603d89ad5fc719fbda17bf",
  measurementId: "G-0PVEWN2PK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



