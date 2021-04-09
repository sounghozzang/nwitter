import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYh58H6AAaIpw7my5Ub986nn-Y19CO0U8",
    authDomain: "nwitter-7f7f8.firebaseapp.com",
    projectId: "nwitter-7f7f8",
    storageBucket: "nwitter-7f7f8.appspot.com",
    messagingSenderId: "1008698261123",
    appId: "1:1008698261123:web:f87e9dc63915b0757ca5b6",
    measurementId: "G-B34XF1BFM7"
  };

  firebase.initializeApp(firebaseConfig);

  export const authService = firebase.auth;