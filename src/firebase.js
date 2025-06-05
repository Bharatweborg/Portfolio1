import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrgIYbmnbcTsIiutXGyR8xPhtc5zuDOO4",
  authDomain: "submit-8e72a.firebaseapp.com",
  databaseURL: "https://submit-8e72a-default-rtdb.firebaseio.com",
  projectId: "submit-8e72a",
  storageBucket: "submit-8e72a.firebasestorage.app",
  messagingSenderId: "441207845723",
  appId: "1:441207845723:web:21866ba456c04e2996e07e",
  measurementId: "G-FRDS227R85"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
