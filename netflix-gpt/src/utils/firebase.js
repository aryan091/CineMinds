// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf1Xoweh6KCflHscsOjgWaHLe3wW9hB_4",
  authDomain: "streamai-502eb.firebaseapp.com",
  projectId: "streamai-502eb",
  storageBucket: "streamai-502eb.appspot.com",
  messagingSenderId: "407297276861",
  appId: "1:407297276861:web:4011c27a5fd32c12e2f0d4",
  measurementId: "G-W0RTY1384C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);