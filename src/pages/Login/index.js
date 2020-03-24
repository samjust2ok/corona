import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '@material-ui/core/Button';
import app from "../../base";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AuthContext, useAuthContext } from "../../auth/Auth";
import './styles.scss';

export function Login({ history }){
  var [email, setEmail] = useState('');
  var [phone, setPhone] = useState('');
  const [btnClick, setBtnClick] = useState(false);
  const [btnAuthClick, setBtnAuthClick] = useState(false);
  const [error, setError] = useState(null);

   const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, phone } = event.target.elements;
      try {
        const user = app.auth().currentUser;
        const email_verified = user.emailVerified;
        if (user !== null && email_verified) {
          await app
          .auth()
          .signInWithEmailAndPassword(email.value, phone.value);
        history.push("/");
        } else {
          alert("Please verify your email first");
        }
        
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
    return (
      <div className="login">
        <div className="form">
        <h1> Welcome back. </h1>
        <p> Sign in to continue from where you stopped. </p>
        <form onSubmit={handleLogin}>
        <Input 
        type="email"
        name="email"
        value={email}
        placeholder="youremail@example.com"
        label="Email"
        handleChange={e => setEmail(e.target.value)}
        />
        <Input 
        type="text"
        name="phone"
        value={phone}
        placeholder="+234 *** *** ***"
        label="Phone"
        handleChange={e => setPhone(e.target.value)}
        />
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        > Sign in</Button>
        <p> Don't have an account yet? <Link to="/signup"> Sign Up </Link> </p>
        </form>
        </div>
      </div>
    );
  
}

export default Login;
