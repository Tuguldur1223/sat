// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZDFiOOt0qQaHIso2zdLD8kpCQy9CKas",
  authDomain: "sat-math-42ccf.firebaseapp.com",
  databaseURL: "https://sat-math-42ccf-default-rtdb.firebaseio.com",
  projectId: "sat-math-42ccf",
  storageBucket: "sat-math-42ccf.appspot.com",
  messagingSenderId: "1023636774262",
  appId: "1:1023636774262:web:dc931109d6b53378eeee57",
  measurementId: "G-KNTTFFRFE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export default app;
