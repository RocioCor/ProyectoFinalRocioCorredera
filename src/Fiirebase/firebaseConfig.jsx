// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJP3FOx-VCDpj7MAfzKIih1UT9_h9Vpd4",
  authDomain: "ecommrocellphone.firebaseapp.com",
  projectId: "ecommrocellphone",
  storageBucket: "ecommrocellphone.appspot.com",
  messagingSenderId: "673990947812",
  appId: "1:673990947812:web:5d9d15f6b5d495092f0df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)