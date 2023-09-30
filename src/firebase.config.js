// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6VCvDFtFCvAkGHvVurT650nvo5wPri3A",
  authDomain: "moha-milon-8e90b.firebaseapp.com",
  projectId: "moha-milon-8e90b",
  storageBucket: "moha-milon-8e90b.appspot.com",
  messagingSenderId: "613336940743",
  appId: "1:613336940743:web:8b93de70db44fe8ce23ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;