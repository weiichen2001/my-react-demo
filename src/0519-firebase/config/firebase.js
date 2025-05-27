// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5wq0ieh_v6jxbAaqw2s80AqUiQuypZZ4",
    authDomain: "my-react-0519.firebaseapp.com",
    projectId: "my-react-0519",
    storageBucket: "my-react-0519.firebasestorage.app",
    messagingSenderId: "813963615265",
    appId: "1:813963615265:web:29edcdbefa4b42382cd760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();