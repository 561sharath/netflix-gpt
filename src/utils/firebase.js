// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgZ4CgcjtQ8hkGSZJRI0b0dJC_ppdTsDs",
  authDomain: "netflix-gpt-a0058.firebaseapp.com",
  projectId: "netflix-gpt-a0058",
  storageBucket: "netflix-gpt-a0058.appspot.com",
  messagingSenderId: "352582049207",
  appId: "1:352582049207:web:881167473d5c0fb489dc32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
