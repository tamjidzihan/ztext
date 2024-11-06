import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID,
// };


const firebaseConfig = {
    apiKey: "AIzaSyCtZVT9AM9qKZtPtl8XszcGTS6G6PQod_s",
    authDomain: "ztext-590c0.firebaseapp.com",
    projectId: "ztext-590c0",
    storageBucket: "ztext-590c0.firebasestorage.app",
    messagingSenderId: "877526772507",
    appId: "1:877526772507:web:9de502fedf778fd657c1be"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const userCollection = "user"
export const authCollectionName = "authinfo"
export const categoryCollection = "category"