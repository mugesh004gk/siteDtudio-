import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Replace with your Firebase project configuration
// You can find this in your Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyAAESDTZVPho5zsQLAxz3iF3_c0n8KCCCA",
  authDomain: "sitestudio-builder.firebaseapp.com",
  projectId: "sitestudio-builder",
  storageBucket: "sitestudio-builder.firebasestorage.app",
  messagingSenderId: "88796283734",
  appId: "1:88796283734:web:05fd6074f9bd7e95960cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
