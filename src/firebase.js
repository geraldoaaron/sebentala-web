// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-a8eb9.firebaseapp.com",
  projectId: "next-blog-a8eb9",
  storageBucket: "next-blog-a8eb9.firebasestorage.app",
  messagingSenderId: "1036515575781",
  appId: "1:1036515575781:web:91991e48c784a7db70110c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);