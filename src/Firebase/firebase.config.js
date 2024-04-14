// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbK7No-6Kskev0UHANWwtO0lIpPGp4jEI",
  authDomain: "assignment9-b30a7.firebaseapp.com",
  projectId: "assignment9-b30a7",
  storageBucket: "assignment9-b30a7.appspot.com",
  messagingSenderId: "159947413862",
  appId: "1:159947413862:web:397851ef04fef6a70cd0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth