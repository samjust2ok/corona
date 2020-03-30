import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import Axios from 'axios';
import app from '../base.js'

const AuthContext = React.createContext();
const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
     throw new Error('useAuthContext must be used within a Context provider')
     }
    return context;
}
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(setCurrentUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export { AuthContext, useAuthContext, AuthProvider }