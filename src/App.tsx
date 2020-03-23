import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import './App.css';

import Header from './pages/Navigation';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Tips from './pages/Tips';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className='container'>
        <Route exact path={ROUTES.HOME} component={Main} />
        <Route path={ROUTES.DASHBOARD} component={Main} />
        <Route path={ROUTES.TIPS} component={Tips} />
        <Route path={ROUTES.REPORT} component={Report} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGNUP} component={Signup} />
      </div>
      <Footer />
    </div>
  </Router>
);
export default App;
