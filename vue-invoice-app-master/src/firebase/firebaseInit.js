import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8jtT58WM0OqqV0wUZEPF_FNKRFqWMMHE",
  authDomain: "invoice-generator-3f9b9.firebaseapp.com",
  projectId: "invoice-generator-3f9b9",
  storageBucket: "invoice-generator-3f9b9.appspot.com",
  messagingSenderId: "551083155711",
  appId: "1:551083155711:web:f5d0bbdded9892e56dacca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
