// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTLb5QDkKwB3Kjg1KrMPUHtrwlJcHzNCk",
  authDomain: "inventory-management-d6916.firebaseapp.com",
  projectId: "inventory-management-d6916",
  storageBucket: "inventory-management-d6916.appspot.com",
  messagingSenderId: "741813152167",
  appId: "1:741813152167:web:a0b8e13016c71d8bd46e82",
  measurementId: "G-HE21LDGNRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};