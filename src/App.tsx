import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebaseInit from 'firebase';
import * as ROUTES from './constants/routes';
import { AuthProvider } from './auth/Auth'
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './pages/Navigation';
import Dashboard from './pages/Dashboard';
import Tips from './pages/Tips';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Provider } from "react-redux";
import store, { persistedStore } from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import StyledApp from './styled/StyledApp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';


import { faExclamationCircle,faPlaneArrival,faPhone, faCheckCircle ,faArrowLeft, faCaretDown, faCity, faEnvelope, faPlaneDeparture, faFileMedicalAlt,faShareAlt, faPhoneVolume, faBars, faTimes, faCaretRight, faInfo, faUserAlt, faHandsHelping, faInfoCircle, faEye, faEyeSlash, faSearch, faEllipsisH, faCog, faFileMedical, faSignOutAlt, faUserEdit, faAsterisk, faBell, faUser, faAngleRight, faArrowRight, faUserMinus, faVirus, faThumbsUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SearchPage from './pages/SearchPage';
import Profile from './pages/Profile';



library.add(fab,faThumbsUp,faUserMinus,faVirus,faCheckCircle,faBell,faArrowRight,faAngleRight,faAsterisk,faUser,faSignOutAlt,faCog,faFileMedical,faPhone,faSearch,faEllipsisH,faExclamationCircle,faEye,faEyeSlash,faArrowLeft,faHandsHelping,faInfoCircle,faUserAlt,faCaretRight,faBars,faTimes,faFileMedicalAlt,faShareAlt,faPlaneArrival, faCheckCircle,faPhone,faPhoneVolume,faPlaneDeparture,faArrowLeft,faAngleDown,faCaretDown,faCity,faEnvelope);

const App = () => (
  <Provider store = {store}>
    <PersistGate persistor = {persistedStore}>
    <ThemeProvider theme = {theme}>
    <AuthProvider>
      <Router>
        <>
          <StyledApp>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.TIPS} component={Tips} />
            <Route path={ROUTES.REPORT} component={Report} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.HEADER} component={Header} />
            <Route path={ROUTES.SEARCHPAGE} component={SearchPage} />
            <Route path={ROUTES.PROFILE} component={Profile} />
          </StyledApp>
        </>
      </Router>
    </AuthProvider>
    </ThemeProvider>
    </PersistGate>
  </Provider>
);
export default App;
