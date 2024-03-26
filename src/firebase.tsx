// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS-46grTKhSMCY5mZo6ExC_nvdA_O2p7c",
  authDomain: "tabaani-ff454.firebaseapp.com",
  projectId: "tabaani-ff454",
  storageBucket: "tabaani-ff454.appspot.com",
  messagingSenderId: "473059510009",
  appId: "1:473059510009:web:8550443f4e6deaf69c4428",
  measurementId: "G-9N939GBB09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
export {auth, provider};