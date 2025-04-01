// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGF3k0hCOiiwTwn9JkyVD0ckFo_6dFwvA",
  authDomain: "interviewx-5571e.firebaseapp.com",
  projectId: "interviewx-5571e",
  storageBucket: "interviewx-5571e.firebasestorage.app",
  messagingSenderId: "991148144174",
  appId: "1:991148144174:web:9b26f673f2e23de527d1bf",
  measurementId: "G-2R5JG6R50V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);