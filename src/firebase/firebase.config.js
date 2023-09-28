// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArGgjJHmEUADz0YjXwPCHgTfVUVGR5ufA",
  authDomain: "email-password-project-77000.firebaseapp.com",
  projectId: "email-password-project-77000",
  storageBucket: "email-password-project-77000.appspot.com",
  messagingSenderId: "926337026863",
  appId: "1:926337026863:web:1b318bc2c407b117c9efda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;