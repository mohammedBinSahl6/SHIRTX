import { initializeApp } from "firebase/app";

//import {getDatabase} from 'firebase/database'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOulSQV4loDN59YgV8io_a0E8Fm-rk3iE",
  authDomain: "shirtx2.firebaseapp.com",
  projectId: "shirtx2",
  storageBucket: "shirtx2.appspot.com",
  messagingSenderId: "406762511379",
  appId: "1:406762511379:web:87178101612a70324673e6",
  measurementId: "G-NQKG2FYGNP"
};

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)