// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIqBtt0-Z-PfjRnVjPfi39z0lCSBy6hDE",
    authDomain: "clean-jobs-37bad.firebaseapp.com",
    projectId: "clean-jobs-37bad",
    storageBucket: "clean-jobs-37bad.appspot.com",
    messagingSenderId: "891859437887",
    appId: "1:891859437887:web:68df63d8e37a48e0dd6b8a",
    measurementId: "G-Q1VJZMYTLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;