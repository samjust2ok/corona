import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '@material-ui/core/Button';
import app from "../../base";
import './styles.scss';


export function Login({ history }){
  var [email, setEmail] = useState('');
  var [pass, setPass] = useState('');


   const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, pass } = event.target.elements;
      try {
        const user = app.auth().currentUser;
        const email_verified = user.emailVerified;
        if (user !== null && email_verified) {
          await app
          .auth()
          .signInWithEmailAndPassword(email.value, pass.value);
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
      <div className="max-width">
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
        type="password"
        name="pass"
        value={pass}
        placeholder="*** *** *** ***"
        label="Pass"
        handleChange={e => setPass(e.target.value)}
        />
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        > Sign in</Button> 
        <br />
        <br />
        <p> Don't have an account yet? <Link to="/signup"> Sign Up </Link> </p>
        </form>
        </div>
      </div>
      </div>
    );
  
}

export default Login;
