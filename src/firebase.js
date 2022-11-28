import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAuDhdPZmvnr5q70njH4vuGrQyNEEApzXA",
    authDomain: "shirtx-80885.firebaseapp.com",
    projectId: "shirtx-80885",
    storageBucket: "shirtx-80885.appspot.com",
    messagingSenderId: "563480838406",
    appId: "1:563480838406:web:a8b673d01a1dbe4e3e1e87",
    measurementId: "G-VKND1DR4D7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)