// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqgSKeGBCJJSblx8reMjsN9TnQxoia5Jg",
  authDomain: "tabaaniadmins.firebaseapp.com",
  projectId: "tabaaniadmins",
  storageBucket: "tabaaniadmins.appspot.com",
  messagingSenderId: "661347150787",
  appId: "1:661347150787:web:993ee869f43591f689ab76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };