// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RPaPLcyf8TSIqlVh2JSkKPdaK1bKgvg",
  authDomain: "chat-project1-d4ae7.firebaseapp.com",
  projectId: "chat-project1-d4ae7",
  storageBucket: "chat-project1-d4ae7.appspot.com",
  messagingSenderId: "319168148972",
  appId: "1:319168148972:web:a57e43b5fe9a8ad749bcc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

setActiveScreen("loginPage");
// setActiveScreen("logupPage");
// setActiveScreen("resetPass");
// setActiveScreen("chatPass");
