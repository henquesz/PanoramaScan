// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9HNIGEqUhr-uhrUHBAQYaIvGD_RSThcQ",
  authDomain: "ossainapp-52cf0.firebaseapp.com",
  projectId: "ossainapp-52cf0",
  storageBucket: "ossainapp-52cf0.appspot.com",
  messagingSenderId: "351470068640",
  appId: "1:351470068640:web:82b8e91b4fb0683496fac5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();