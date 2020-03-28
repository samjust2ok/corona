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
import { Provider } from "react-redux";
import store from './stores/index';

const App = () => (
  <Provider store = {store}>
    <AuthProvider>
      <Router>
        <>
          <Header />
          <div className='container'>
            <Route exact path={ROUTES.HOME} component={Main} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.TIPS} component={Tips} />
            <Route path={ROUTES.REPORT} component={Report} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.HEADER} component={Header} />
          </div>
          <Footer />
        </>
      </Router>
  </Router>
  </AuthProvider>
  </Provider>
);
export default App;
