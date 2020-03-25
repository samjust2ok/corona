import React, { useState, useEffect, Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
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
    // app.auth().onAuthStateChanged((setCurrentUser) => {
    //   if(setCurrentUser) {
    //     console.log("Current user is available");
    //   } else {
    //     console.log("Current user is not available");
    //   }
    // });
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

function Auth(ComponentToProtect) {
  return class Authe extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      Axios.get('https://service-mart-api.herokuapp.com/api/checkToken')
        .then((res) => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
          <ComponentToProtect {...this.props} />
      );
    }
  };
}

export { AuthContext, useAuthContext, AuthProvider, Auth }