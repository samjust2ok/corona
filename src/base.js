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

// export const firebase = firebaseInit.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
// export const auth = firebase.auth();