import React, { useState, useCallback } from 'react';
import StyledSignup from '../styled/StyledSignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInputLarge from '../components/CustomInputLarge';
import { Button } from '../styled/StyledHome';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { validators, isES } from '../utils/appUtils';
import app from "../base";
import LinLoader from '../components/LinLoader';
import { writeUserData } from '../services/userServices';


export function Signup(){
    const [fieldValues,setFieldValues]= useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
    })

    const [loading,setLoading] = useState(false);
    const [showCreateAccountError,setShowCreateAccountError] = useState(false);
    
    
  let [errorFields,setErrorFields] = useState({
    email: false,
    password: false,
    fName: false,
    lName: false,
  })

  let history = useHistory();

  const setFieldValue = (field,value)=>{
    setFieldValues(fields=>({
        ...fields,
        [field]: value
    }));
}


const setErrorOnNonFilledFields = ()=>{
    let state = {
        fName: !validators.textValidator(fieldValues.fName),
        lName: !validators.textValidator(fieldValues.lName),
        password: isES(fieldValues.password),
        email: !validators.emailValidator(fieldValues.email),
    }
    setErrorFields(state);
    return state;
}

const checkForAnyError = (errorFields)=>{
    return Object.values(errorFields).includes(true);
}

  const firstNameHandler = (v)=>setFieldValue('fName',v)
  const lastNameHandler = (v)=>setFieldValue('lName',v)
  const emailHandler = (v)=>setFieldValue('email',v)
  const passwordHandler = (v)=>setFieldValue('password',v)

  const goBack = ()=>history.goBack();

const handleCreateAccount = useCallback(()=>{
        let errorFields = setErrorOnNonFilledFields();
        if(checkForAnyError(errorFields)) return;
        
        let { email, password, fName, lName } = fieldValues;
        setLoading(true);
        app.auth().createUserWithEmailAndPassword(email, password).then(function(response){
            setLoading(false);
            let user = app.auth().currentUser;
                user.sendEmailVerification().then(function() {
                    writeUserData(user.uid, {
                        firstName: fName,
                        lastName: lName,
                        email: email,
                    },function(success){
                        setLoading(false);
                        history.push('./login')
                    }, function(error){
                        setLoading(false);
                        console.log(error)
                    }
                  )
        }).catch(function(error) {
            setLoading(false);
            console.log(error)
        })
   }
).catch(err=>{
    setLoading(false)
    setShowCreateAccountError(true);
});
})
    return (
      <StyledSignup>
          <div className="Container">
          <div className="Back">
            <FontAwesomeIcon onClick = {goBack} icon = 'arrow-left'/>
          </div>
          <div className="Header">
            <h1>Create an Account</h1>
          </div>
          <div className="Form">
              {
                showCreateAccountError && 
                <div className="Error-Report">
                  <FontAwesomeIcon onClick = {()=>setShowCreateAccountError(false)} icon = 'times'/>
                  <p>Could not create your account, check your connection</p>
                </div>
              }
              <CustomInputLarge handleChange = {firstNameHandler} error = {errorFields.fName} errorMessage = 'Field is required' placeHolder = 'First Name' type = 'email'/>
             <CustomInputLarge handleChange = {lastNameHandler} error = {errorFields.lName} errorMessage = 'Field is required' placeHolder = 'Last Name'/>
             <CustomInputLarge handleChange = {emailHandler} error = {errorFields.email} errorMessage = 'This does not seem like a valid email address' placeHolder = 'Email' type = 'email'/>
             <CustomInputLarge handleChange = {passwordHandler} error = {errorFields.password} errorMessage = 'Invalid Password' icon = 'eye' icon2 = 'eye-slash' placeHolder = 'Password' type = 'password'/>
             <ButtonFullWidth onClick = {handleCreateAccount}>
                Create your account
                {
                    loading && <LinLoader/>
                }
             </ButtonFullWidth>
          </div>
          <div className="Footer">
              <p>Have an account? <a href="/login">Login</a> instead</p>
          </div>
          </div>
      </StyledSignup>
    );
}

const ButtonFullWidth = styled(Button)`
  width:100% !important;
  margin-top: 20px;
  height: 60px;
`;



export default Signup;
