// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9552e.firebaseapp.com",
  projectId: "mern-blog-9552e",
  storageBucket: "mern-blog-9552e.firebasestorage.app",
  messagingSenderId: "100399502833",
  appId: "1:100399502833:web:77cf17b66ca87582482050"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

