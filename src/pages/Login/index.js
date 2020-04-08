import React, { useState, useCallback } from 'react';
import StyledLogin from '../../styled/StyledLogin';
import app from "../../base";
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInputLarge from '../../components/CustomInputLarge';
import { Button } from '../../styled/StyledHome';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import LinLoader from '../../components/LinLoader';
import { isES } from '../../utils/appUtils';
import { getUserById } from '../../services/userServices';
import { useDispatch } from 'react-redux';
import { storeUser } from '../../actions/userActions';


export function Login(){
  let history = useHistory()


  let [errorFields,setErrorFields] = useState({
    email: false,
    password: false
  })


  const [fieldValues,setFieldValues]= useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();

  const setFieldValue = (field,value)=>{
    setFieldValues(fields=>({
        ...fields,
        [field]: value
    }));
}


const setErrorOnNonFilledFields = ()=>{
    let state = {
        password: isES(fieldValues.password),
        email: isES(fieldValues.email),
    }
    setErrorFields(state);
    return state;
}

const checkForAnyError = (errorFields)=>{
    return Object.values(errorFields).includes(true);
}
  const emailHandler = (v)=>setFieldValue('email',v)
  const passwordHandler = (v)=>setFieldValue('password',v)


  const [loading,setLoading] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  const goBack = ()=>history.goBack();

   const handleLogin = useCallback(()=>{
     let errorFields = setErrorOnNonFilledFields();
     if(checkForAnyError(errorFields)) return;
     setLoading(true);

     let { email, password } = fieldValues;

     app.auth().signInWithEmailAndPassword(email, password)
     .then(response=>{
       setShowLoginError(false)
       setLoading(false);
        const userId = app.auth().currentUser.uid;
        getUserById(userId,function(data){
          if(data){
            setLoading(false)
            dispatch(storeUser({
              user:data
            }));
            history.push('/profile')
          }else{
            setLoading(false)
            setShowLoginError(true)
          }
        }, function(error){
            setLoading(false)
        });
     })
     .catch(function(error) {
        setShowLoginError(true);
        setLoading(false);
        console.log(error)
    });
   });



    return (
      <StyledLogin>
          <div className="Container">
          <div className="Back">
            <FontAwesomeIcon onClick = {goBack} icon = 'arrow-left'/>
          </div>
          <div className="Header">
            <h1>Login</h1>
          </div>
          <div className="Form">
              {
                showLoginError && 
                <div className="Error-Report">
                  <FontAwesomeIcon onClick = {()=>setShowLoginError(false)} icon = 'times'/>
                  <p>Invalid Email or Password</p>
                </div>
              }
             <CustomInputLarge handleChange = {emailHandler} error = {errorFields.email} errorMessage = 'The email address is invalid or is not registered with us' placeHolder = 'Email' type = 'email'/>
             <CustomInputLarge handleChange = {passwordHandler} error = {errorFields.password} errorMessage = 'Invalid Password' icon = 'eye' icon2 = 'eye-slash' placeHolder = 'Password' type = 'password'/>
             <ButtonFullWidth onClick = {handleLogin}>
              Login to your account
              {
                loading && <LinLoader/>
              }
             </ButtonFullWidth>
          </div>
          <div className="Footer">
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
          </div>
      </StyledLogin>
    );
}

const ButtonFullWidth = styled(Button)`
  width:100% !important;
  margin-top: 20px;
  height: 60px;
`;

export default Login;
