import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./config/firebase.json";

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
