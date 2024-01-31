// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6_QadU2wVtj1Niu8O4SSrS-SG_5y_uJs",
  authDomain: "warm-journal.firebaseapp.com",
  projectId: "warm-journal",
  storageBucket: "warm-journal.appspot.com",
  messagingSenderId: "679211570327",
  appId: "1:679211570327:web:772429d322632afac605d2",
  measurementId: "G-70L7S32CDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
