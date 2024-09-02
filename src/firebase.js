// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS6DDzAJV92vxg1t6PtNELDf9kbUMw89Q",
  authDomain: "learnflow-60f91.firebaseapp.com",
  projectId: "learnflow-60f91",
  storageBucket: "learnflow-60f91.appspot.com",
  messagingSenderId: "23752455094",
  appId: "1:23752455094:web:15e78dbf5059d353350717",
  measurementId: "G-5ZP2K2SF67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
