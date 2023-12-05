// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdBt2xJacr8ROsEy8lrLJvGfJpnWYvsLs",
    authDomain: "brandshop-client-bed47.firebaseapp.com",
    projectId: "brandshop-client-bed47",
    storageBucket: "brandshop-client-bed47.appspot.com",
    messagingSenderId: "967223018056",
    appId: "1:967223018056:web:1cb697be444fe96f148e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;