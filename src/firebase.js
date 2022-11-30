import { initializeApp } from "firebase/app";

//import {getDatabase} from 'firebase/database'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABxLkufCoXpx49hlen3by9AZIAtxPlJ4o",
  authDomain: "shirtx-82cc2.firebaseapp.com",
  projectId: "shirtx-82cc2",
  storageBucket: "shirtx-82cc2.appspot.com",
  messagingSenderId: "23043562465",
  appId: "1:23043562465:web:5e3e5a6e01f951ca0650a0",
  measurementId: "G-R7Q1PNQNXS"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)