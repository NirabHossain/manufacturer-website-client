// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlyIYIr40u9gsM4FcyZQam-VctJxctABs",
  authDomain: "tool-supplier.firebaseapp.com",
  projectId: "tool-supplier",
  storageBucket: "tool-supplier.appspot.com",
  messagingSenderId: "609843689467",
  appId: "1:609843689467:web:cb8cae422f82e288cdfd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;