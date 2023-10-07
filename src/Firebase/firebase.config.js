// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH9YRT0v7IOv64bQDwWGCZrviyG_4_FJQ",
  authDomain: "island-wedding-world.firebaseapp.com",
  projectId: "island-wedding-world",
  storageBucket: "island-wedding-world.appspot.com",
  messagingSenderId: "311066842194",
  appId: "1:311066842194:web:8d25e63c6e0bf0f5e2bb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app