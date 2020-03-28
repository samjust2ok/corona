import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebaseInit from 'firebase';
import * as ROUTES from '../src/constants/routes';
import { AuthProvider } from '../src/auth/Auth'
import './App.css';

import Header from './pages/Navigation';
import Main from './pages/Main';
// import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import Tips from './pages/Tips';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';

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

const App = () => (
  <AuthProvider>
  <Router>
    <>
      <Header />
      <div className='container'>
        <Route exact path={ROUTES.HOME} component={Main} />
        {/* <Route path={ROUTES.DASHBOARD} component={Dashboard} /> */}
        <Route exact path={ROUTES.TIPS} component={Tips} />
        <Route exact path={ROUTES.REPORT} component={Report} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.SIGNUP} component={Signup} />
        <Route exact path={ROUTES.HEADER} component={Header} />
        
      </div>
      <Footer />
    </>
  </Router>
  </AuthProvider>
);
export default App;
