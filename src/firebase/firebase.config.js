// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu-_FLugchQkgNOCeJEq2amxwWRZ2R25w",
  authDomain: "privet-route-auth-58d7a.firebaseapp.com",
  projectId: "privet-route-auth-58d7a",
  storageBucket: "privet-route-auth-58d7a.appspot.com",
  messagingSenderId: "806631693290",
  appId: "1:806631693290:web:b32a75ff66fc8210923093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth