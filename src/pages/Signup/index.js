import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '@material-ui/core/Button';
import app from "../../base";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AuthContext, useAuthContext } from "../../auth/Auth";
import './styles.scss';

export function Signup({ history }){
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');

  const handleReg = useCallback(
    async event => {
      event.preventDefault();
      const { email, pass } = event.target.elements;
      
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, pass.value).then(function() {
            var user = app.auth().currentUser;
            var email_id = user.email;
            var email_verified = user.emailVerified;
            // Send verification email to the user
          user.sendEmailVerification().then(function() {
            alert('Email sent successfully');
            if(email_verified) {
              history.push("/dashboard");
            } else {
              alert("Please verify your email address and login");
              history.push("/login");
            }
            
          }).catch(function(error) {
            console.log("Error", error);
          });
          })

          // End of verification email
        
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  const [btnClick, setBtnClick] = useState(false);
  const [btnAuthClick, setBtnAuthClick] = useState(false);
  const [error, setError] = useState(null);
    return (
      <div className="signin">
        <div className="form">
        <h1> Register. </h1>
        <p> Join us today to reported suspected cases. </p>
        <form onSubmit={handleReg}>
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
        placeholder="+234 *** *** ***"
        label="Password"
        handleChange={e => setPass(e.target.value)}
        />
        <Button 
        variant="contained" 
        color="primary"
        type="submit"
        > Sign up</Button>
        <p> Already have an Account? <Link to="/login"> Sign In </Link> </p>
        </form>
        </div>
      </div>
    );
  
}

export default Signup;
