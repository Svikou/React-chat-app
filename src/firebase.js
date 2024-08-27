// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYqjvvEP1GD7tKLz1tBJy-To9ucHRhxww",
  authDomain: "react-chat-app-50425.firebaseapp.com",
  projectId: "react-chat-app-50425",
  storageBucket: "react-chat-app-50425.appspot.com",
  messagingSenderId: "509394439106",
  appId: "1:509394439106:web:b1253dd709d2f1f130e45b",
  measurementId: "G-LJDFR598S1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
