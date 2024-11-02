// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsXfvKuxJqb3UMtSPIH0zh0Xf_mmg65Uc",
  authDomain: "shop-review-92c2e.firebaseapp.com",
  databaseURL: "https://shop-review-92c2e-default-rtdb.firebaseio.com",
  projectId: "shop-review-92c2e",
  storageBucket: "shop-review-92c2e.appspot.com",
  messagingSenderId: "298965859037",
  appId: "1:298965859037:web:d7c6b3dfccadfba28ff934",
  measurementId: "G-GLWC273CHV",
};

// Initialize Firebase
const app = initializeApp(Constants?.expoConfig?.extra?.firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
