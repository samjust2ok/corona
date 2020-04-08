import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


// const firebaseConfig = {
//   apiKey: "AIzaSyCOMuidIz53S_1_iW5isfoiy3J66QVp720",
//   authDomain: "dsc-covid-19.firebaseapp.com",
//   databaseURL: "https://dsc-covid-19.firebaseio.com",
//   projectId: "dsc-covid-19",
//   storageBucket: "dsc-covid-19.appspot.com",
//   messagingSenderId: "724650717987",
//   appId: "1:724650717987:web:1e96e61a05f00140a35296",
//   measurementId: "G-LJRVG3223S"
// };


const firebaseConfig = {
  apiKey:   "AIzaSyBWbRFiNl1TdTLgjs-lE71gFX3V8ybNznM",
  authDomain: "covid-app-b2566.firebaseapp.com",
  databaseURL: "https://covid-app-b2566.firebaseio.com",
  projectId: "covid-app-b2566",
  storageBucket: "covid-app-b2566.appspot.com",
  // messagingSenderId: "724650717987",
  // appId: "1:724650717987:web:1e96e61a05f00140a35296",
  // measurementId: "G-LJRVG3223S"
};



export const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const storage = app.storage();
export const database = app.database();
export const auth = app.auth();

export default app;




