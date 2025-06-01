// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVPX6FQE-1nUt0MqOAZTW9L1mLmb3saCo",
  authDomain: "careduel-ec7c5.firebaseapp.com",
  projectId: "careduel-ec7c5",
  storageBucket: "careduel-ec7c5.appspot.com",  // ✅ Fixed here
  messagingSenderId: "1088434833790",
  appId: "1:1088434833790:web:032e002c4e901bdcf20b2f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
