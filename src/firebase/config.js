// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/Storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDGJh3AOakrLZ03tTlwuxzaHMzQzXihvI0",
  authDomain: "piedras-gaia.firebaseapp.com",
  projectId: "piedras-gaia",
  storageBucket: "piedras-gaia.appspot.com",
  messagingSenderId: "198169634784",
  appId: "1:198169634784:web:4b6e3428ebb35304942d85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const Storage = getStorage(app);

export default app;
