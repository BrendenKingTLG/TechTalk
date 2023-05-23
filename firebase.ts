// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZxLfPOJUkH6yK3ee5odGQOzOiROC31Ng",
  authDomain: "techtalk-3c538.firebaseapp.com",
  projectId: "techtalk-3c538",
  storageBucket: "techtalk-3c538.appspot.com",
  messagingSenderId: "175757503196",
  appId: "1:175757503196:web:0036d22a8662bc3aace219",
  measurementId: "G-5SRLPZMDTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
