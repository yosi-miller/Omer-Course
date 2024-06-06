// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaEfRhQRkMnN-19JBQ1_crp2Y3XWKri0",
  authDomain: "project-4803102739000811188.firebaseapp.com",
  projectId: "project-4803102739000811188",
  storageBucket: "project-4803102739000811188.appspot.com",
  messagingSenderId: "406091227148",
  appId: "1:406091227148:web:deb7464a4f2741b5094e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
