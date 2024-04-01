// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8CCMzp1d8xrmK-p3w3xpc-hbCaKsBXrw",
    authDomain: "todoapp-3b37e.firebaseapp.com",
    projectId: "todoapp-3b37e",
    storageBucket: "todoapp-3b37e.appspot.com",
    messagingSenderId: "599346020647",
    appId: "1:599346020647:web:c70da3721c30fb882f6902",
    measurementId: "G-44DZQ1P9CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
