import React, { useRef, useState, useEffect } from 'react';
import FormCategory from './FormCategory'
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { genderOpt,stateOpt} from '../constants/appConst';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import theme from '../constants/theme';
import { isES, validators } from '../utils/appUtils';
import { useSelector, useDispatch } from 'react-redux';
import { storePersonalInfo } from '../actions/storeActions'
import { checkUserExists } from '../services/userServices';

const iconStyle  = {display:'flex',alignItems:'center'}
const ERROR_MESSAGE = `We can't find this email address in our records, ensure you have an account with us`;


const UserInfoForm = ({style,next,previous,index})=>{
    const selector = useSelector(state=>state.reportForm.personalInformation);
    const {phoneNumber,email,state,age,gender } = selector;
    const [emailError, setEmailError] = useState('Invalid email address');


    const [errorFields, setErrorFields] = useState({
        email: false,
        gender: false,
        pNumber:false,
        age: false,
        state:false,
    })

    const [fieldValues,setFieldValues]= useState({
        email: email,
        gender: gender,
        pNumber:phoneNumber,
        age: age,
        state:state,
    })


    const [checkingEmail,setCheckingEmail] = useState(false);
    const [emailCheckSuccess,setEmailCheckSuccess] = useState(false);

  
    const emailHandler = (v)=>{
        setCheckingEmail(true)
        setFieldValue('email',v)
      const  emailCheckSuccess = (exists)=>{
            if(exists){
                setEmailCheckSuccess(true);
                setErrorFields(errorFields=>({
                    ...errorFields,
                    email: false
                }))
            }else{
                setEmailCheckSuccess(false);
                setEmailError(ERROR_MESSAGE)
                setErrorFields(errorFields=>({
                    ...errorFields,
                    email: true
                }))
            }
            setCheckingEmail(false)
        }

      const  emailCheckFailure = (error)=>{
          setEmailCheckSuccess(false);
          setEmailError(ERROR_MESSAGE)
            setErrorFields(errorFields=>({
                ...errorFields,
                email: true
            }))
            setCheckingEmail(false)
        }
        checkUserExists(v,emailCheckSuccess,emailCheckFailure)
    }

    const ageHandler = (v)=>setFieldValue('age',v)
    const genderHandler = (v)=>setFieldValue('gender',v)
    const stateHandler = (v)=>setFieldValue('state',v)
    const phoneNumberHandler = (v)=>setFieldValue('pNumber',v)

    const setErrorOnNonFilledFields = ()=>{
        let state = {
            pNumber: !validators.phoneNumberValidator(fieldValues.pNumber),
            age: isES(fieldValues.age),
            gender: isES(fieldValues.gender),
            state: isES(fieldValues.state),
            email: !emailCheckSuccess,
        }
        setErrorFields(state);

        return state;
    }

    const checkForAnyError = (errorFields)=>{
        return Object.values(errorFields).includes(true);
    }


    const setFieldValue = (field,value)=>{
        setFieldValues(fields=>({
            ...fields,
            [field]: value
        }));
    }

    const dispatch = useDispatch();
    
    const handleNext = ()=>{
        
        let errorFields = setErrorOnNonFilledFields();
        if(checkForAnyError(errorFields)) return;
        const { pNumber, email, age, gender, state } =  fieldValues;
        const personalInfo = {
            email: email,
            phoneNumber: pNumber,
            gender: gender,
            age: age,
            state: state
        }
        dispatch(storePersonalInfo(personalInfo))
        next();
    }

    return (
        <FormCategory index = {index} style = {style} header = 'Personal Information'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                        <div className="FieldInputs">
                        {/* <div className="Field-Layout Two-Field">
                        <CustomInput preValue = {firstName} errorMessage = 'Enter your first name' error = {errorFields.fName} handleChange = {firstNameHandler} placeHolder = 'First name'/>
                        <CustomInput preValue = {lastName} errorMessage = 'Enter your last name' error = {errorFields.lName} handleChange = {lastNameHandler} placeHolder = 'Last name'/>
                        </div> */}
                        <div className="Field-Layout One-Field">
                            <CustomInput success = {emailCheckSuccess} successMessage = 'Email verified' loading = {checkingEmail} preValue = {email} errorMessage = {emailError} error = {errorFields.email} handleChange = {emailHandler} icon = 'envelope' placeHolder = 'Email address' info = "Enter the email you created an account with"/>
                        </div>
                        <div className="Field-Layout One-Field">
                            <CustomInput preValue = {phoneNumber} errorMessage = 'Enter a valid phone number' error = {errorFields.pNumber} handleChange = {phoneNumberHandler}  icon = 'phone' placeHolder = 'Phone number' info = "Enter a valid mobile number"/>
                        </div>
                        <div className="Field-Layout Two-Field-Phone">
                            <CustomSelect preValue = {gender} errorMessage = 'Select gender' error = {errorFields.gender} handleChange = {genderHandler}  options = {genderOpt} placeHolder = 'Gender'/>
                            <CustomInput preValue = {age} errorMessage = 'Input you age' error = {errorFields.age} handleChange = {ageHandler}  placeHolder = 'Age' type = 'number'/>
                        </div>
                        <div className = 'Field-Layout Icon-Side-Field'>
                            <CustomSelect preValue = {state} errorMessage = 'Current state of residence is required' error = {errorFields.state} handleChange = {stateHandler}  options = {stateOpt} placeHolder = 'State' info = 'Select your current state of residence'/>
                            <div style = {iconStyle}>
                                <FontAwesomeIcon color = {theme.dscPink} icon = 'city'/>
                            </div>
                        </div>
                        </div>
                        <div className = 'ActionButtons'>
                            <Button text = 'Already reported a case?' type = 'secondary'/>
                            <Button onClick = {handleNext} text = 'Next'/>
                        </div>
                </div>
            </div>
        </FormCategory>
    );
}





export default UserInfoForm;