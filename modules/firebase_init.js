// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6k5AaGnBPDXqiSZhbuMxT1Xny2qfnNEQ",
  authDomain: "primerproyecto-d41db.firebaseapp.com",
  projectId: "primerproyecto-d41db",
  storageBucket: "primerproyecto-d41db.firebasestorage.app",
  messagingSenderId: "45807343720",
  appId: "1:45807343720:web:3f60986354b7d2485b43dd",
  measurementId: "G-WEC00XNE6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };