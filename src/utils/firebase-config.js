
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKXRs98CFmPP-HfnW8WXrceoXoKF6nuA4",
  authDomain: "react-netflix-clone-c976e.firebaseapp.com",
  projectId: "react-netflix-clone-c976e",
  storageBucket: "react-netflix-clone-c976e.appspot.com",
  messagingSenderId: "97878770819",
  appId: "1:97878770819:web:f24f18edbf5d50bcf3c7b6",
  measurementId: "G-MQ6BZKTK9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);