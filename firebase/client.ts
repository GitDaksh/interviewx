
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGF3k0hCOiiwTwn9JkyVD0ckFo_6dFwvA",
  authDomain: "interviewx-5571e.firebaseapp.com",
  projectId: "interviewx-5571e",
  storageBucket: "interviewx-5571e.firebasestorage.app",
  messagingSenderId: "991148144174",
  appId: "1:991148144174:web:9b26f673f2e23de527d1bf",
  measurementId: "G-2R5JG6R50V"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);