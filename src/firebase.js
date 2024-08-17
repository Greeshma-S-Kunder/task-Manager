// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyAddwNV_UDNmhSGs8UPu84apmNMRhWEsyk",
  authDomain: "task-manager-69115.firebaseapp.com",
  projectId: "task-manager-69115",
  storageBucket: "task-manager-69115.appspot.com",
  messagingSenderId: "151947595449",
  appId: "1:151947595449:web:a2f496b2daca2d9a1a5568",
  measurementId: "G-HYXHR6LVEH"
};*/
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);