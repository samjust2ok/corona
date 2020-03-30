import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebaseInit from 'firebase';
import * as ROUTES from '../src/constants/routes';
import { AuthProvider } from '../src/auth/Auth';
import  PrivateRoute  from '../src/auth/PrivateRoute';
import ScrollToTop from './components/scroll-restoration/scrollToTop'
import './App.css';
import Header from './pages/Navigation';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Tips from './pages/Tips';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Provider } from "react-redux";
import store from './stores/index';
import ReportContainer from './containers/ReportContainer';

const App = () => (
  <Provider store = {store}> 
    <AuthProvider>
      <Router>
          <ScrollToTop />
          <Header />
          <div className='container'>
            <Route exact path={ROUTES.HOME} component={Main} />
            <Route path={ROUTES.TIPS} component={Tips} />
            <PrivateRoute path={ROUTES.REPORT} component={ReportContainer} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.HEADER} component={Header} />
          </div>
          <Footer />
        
      </Router>
    </AuthProvider> 
  </Provider>
);
export default App;
