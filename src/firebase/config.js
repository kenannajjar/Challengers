// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD1GxlkhCYDOJRDJMh5WzunTeOm500RTs",
    authDomain: "challengers-83d7e.firebaseapp.com",
    projectId: "challengers-83d7e",
    storageBucket: "challengers-83d7e.appspot.com",
    messagingSenderId: "278634226492",
    appId: "1:278634226492:web:abac004feba17ead137439",
    measurementId: "G-W27MH11DPL"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// If supported, initialize firebase analytics
// if (isSupported()) {
//     const analytics = getAnalytics(firebaseapp);
// }


export default firebaseapp;
