import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyA72w9xvDJdfyn_BB5HYVjcXyBkRWPai9E",
  authDomain: "service-auth-e9e4e.firebaseapp.com",
  databaseURL: "https://service-auth-e9e4e.firebaseio.com",
  projectId: "service-auth-e9e4e",
  storageBucket: "service-auth-e9e4e.appspot.com",
  messagingSenderId: "667231808245"
});

export default app;