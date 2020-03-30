import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Input from '../../components/Input';
import AlertDialog from '../../components/Dialog';
import Button from '@material-ui/core/Button';
import app from "../../base";
import { useAuthContext } from '../../auth/Auth';
import './styles.scss';


export function Login({ history }){
  const { currentUser } = useAuthContext()
  var [email, setEmail] = useState('');
  var [pass, setPass] = useState('');
  var [passwordChange, setPasswordChange] = useState('');


   const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, pass } = event.target.elements;
      try {
          await app
          .auth()
          .signInWithEmailAndPassword(email.value, pass.value).then(() => {
            const user = app.auth().currentUser;
            const email_verified = user.emailVerified;
            if(email_verified) {
              history.push("/report");
            } else {
              alert('Please Verify your email first');
            }
          })
        
        
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
    const handleResetPassword = () => {
      var auth = app.auth();
      if(passwordChange === '') {
       alert('Email cannot be empty');
      }
      auth.sendPasswordResetEmail(passwordChange).then(function() {
        alert("Check your email to complete your password reset");
        setPasswordChange('');
      }).catch(function(error) {
        console.log(error.msg);
      });

    }
    if (currentUser) {
      return <Redirect to="/report" />;
    }
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
        <AlertDialog 
        text="Forgot Password?"
        content={
          <input 
          type="email"
          name="resetEmail"
          value={passwordChange}
          placeholder="youremail@example.com"
          label="Reset Email"
          onChange={e => setPasswordChange(e.target.value)}
          className="reset__password"
          />
        }
        handleClick={handleResetPassword}
        />
        <p style={{ marginTop: '10px' }}> Don't have an account yet? <Link to="/signup"> Sign Up </Link> </p>
        </form>
        </div>
      </div>
      </div>
    );
  
}

export default Login;
