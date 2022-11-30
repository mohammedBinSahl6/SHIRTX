import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB_GuFOCERSnSY2YoXDNJIpexm-EYGDdFM",
  authDomain: "testable-93d1c.firebaseapp.com",
  projectId: "testable-93d1c",
  storageBucket: "testable-93d1c.appspot.com",
  messagingSenderId: "741528807909",
  appId: "1:741528807909:web:d1e5d82ec8d2bcd06aa70c",
  measurementId: "G-VSVE74BTJM"
};

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)