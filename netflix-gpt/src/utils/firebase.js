// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_KEY,
  authDomain: "streamai-82d9a.firebaseapp.com",
  projectId: "streamai-82d9a",
  storageBucket: "streamai-82d9a.appspot.com",
  messagingSenderId: "1037602215918",
  appId: "1:1037602215918:web:269e6cc2020a2006a3e0ff",
  measurementId: "G-941MJHGHEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
