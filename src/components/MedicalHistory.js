import React, { Children, useState } from 'react';
import FormCategory from './FormCategory'
import Button from './Button';
import Option from './Option';
import { isNull, isES } from '../utils/appUtils';
import { useDispatch, useSelector } from 'react-redux';
import { storeMedicalInfo } from '../actions/storeActions';
import options from '../constants/options';



const MedicalHistory = ({style,next,previous})=>{
    const selector = useSelector(state=>state.reportForm.medicalHistory);


    const {hasCancer, hasHeartDisease, diseaseType} = selector;



    const [errorFields, setErrorFields] = useState({
        hasHeartDisease: false,
        diseaseHistory: false,
        hasCancer: false,
    })

    const [fieldValues,setFieldValues] = useState({
        hasHeartDisease: hasHeartDisease,
        diseaseHistory: diseaseType,
        hasCancer: hasCancer,
    })

    const heartDiseaseHandler = (v)=>setFieldValue('hasHeartDisease',v)
    const diseaseHistoryHandler = (v)=>setFieldValue('diseaseHistory',v)
    const cancerHandler = (v)=>setFieldValue('hasCancer',v)
 


    const setErrorOnNonFilledFields = ()=>{
        let { hasHeartDisease, diseaseHistory, hasCancer} = fieldValues;
        
        let error = {
            hasHeartDisease: isNull(hasHeartDisease),
            diseaseHistory: isES(diseaseHistory),
            hasCancer: isNull(hasCancer),
        }
        setErrorFields(error);
        return error;
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
    const storeValues = ()=>{
        const { hasHeartDisease, hasCancer, diseaseHistory } = fieldValues
        const medicalInfo = {
            diseaseType:diseaseHistory,
            hasHeartDisease,
            hasCancer
        }
        dispatch(storeMedicalInfo(medicalInfo))
    }

    const handleNext = ()=>{
       let error = setErrorOnNonFilledFields();
       if(checkForAnyError(error)) return;
        storeValues()
        next();
    }

    const handlePrevious = ()=>{
        storeValues();
        previous();
    }


    return (
        <FormCategory style = {style} header = 'Medical History'>
            <div className="Content">
                <div className="Fields">
                        <div className="FieldInputs">
                            <Option preValue = {hasHeartDisease} error = {errorFields.hasHeartDisease} handleChange  = {heartDiseaseHandler} label = 'Do you have any heart disease you are being treated for?' options = {options.hearDisease}/>
                            <Option preValue = {diseaseType} error = {errorFields.diseaseHistory} handleChange = {diseaseHistoryHandler} label = 'Choose which of the following that applies to you' options = {options.diseaseType}/>
                            <Option preValue = {hasCancer} error = {errorFields.hasCancer} handleChange = {cancerHandler} label = 'Have you been disgonized with any form of cancer?' options = {options.yesNo}/>
                        </div>
                        <div className = 'ActionButtons'>
                            <Button onClick = {handlePrevious} text = 'Back' icon = 'arrow-left' iconPos = 'left' type = 'secondary'/>
                            <Button onClick = {handleNext} text = 'Next'/>
                        </div>
                </div>
                <div className="Form-Illustration">
                    
                </div>
            </div>
        </FormCategory>
    );
}

export default MedicalHistory;