import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASVxSTrcUoK2pma00tlKXgNX6Ml6bkmLA",
  authDomain: "pomodoro-c0076.firebaseapp.com",
  databaseURL: "https://pomodoro-c0076.firebaseio.com",
  projectId: "pomodoro-c0076",
  storageBucket: "pomodoro-c0076.appspot.com",
  messagingSenderId: "1012255203862",
  appId: "1:1012255203862:web:bd0ea1553ba3b4ee"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
