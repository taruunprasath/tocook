// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQQnL7YuZPK2ZzlSEDyPbUHiPQ29-AA28",
  authDomain: "react-to-cook1.firebaseapp.com",
  projectId: "react-to-cook1",
  storageBucket: "react-to-cook1.appspot.com",
  messagingSenderId: "382330433449",
  appId: "1:382330433449:web:17d45b8f7f977ecfcb5eb8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;