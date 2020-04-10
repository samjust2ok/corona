import React, { useState } from 'react';
import FormCategory from './FormCategory'
import Button from './Button';
import Option from './Option';
import TextArea from './TextArea';
import { isNull, isES } from '../utils/appUtils';
import { useDispatch, useSelector } from 'react-redux';
import { storeSymptoms } from '../actions/storeActions';
import options from '../constants/options';

const SymptomsTwo = ({style,next,previous})=>{

    const selector = useSelector(state=>state.reportForm.symptoms);


    const {hasDifficultyBreathing, symptomsDescription} = selector;


    const [errorFields, setErrorFields] = useState({
        hasDifficultyBreathing: false,
        symptoms: false,
    })

    const [fieldValues,setFieldValues] = useState({
        hasDifficultyBreathing: hasDifficultyBreathing,
        symptoms: symptomsDescription,
    })

    const hasDifficultyBreathingHandler = (v)=>setFieldValue('hasDifficultyBreathing',v)
    const symptomsHandler = (v)=>setFieldValue('symptoms',v)

    const setErrorOnNonFilledFields = ()=>{
        let { hasDifficultyBreathing,symptoms} = fieldValues;
        let error = {
            hasDifficultyBreathing: isNull(hasDifficultyBreathing),
            symptoms: isES(symptoms),
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
        const {hasDifficultyBreathing,symptoms} = fieldValues;
        const symptomsDef = {
            hasDifficultyBreathing,
            symptomsDescription: symptoms
        }
        dispatch(storeSymptoms(symptomsDef))
    }

    const handleNext = ()=>{
       let error = setErrorOnNonFilledFields();
       if(checkForAnyError(error)) return;
        storeValues();
        next();
    }

    const handlePrevious = ()=>{
        storeValues();
        previous();
    }

    return (
        <FormCategory style = {style} header = 'Symtoms'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                    <div className="FieldInputs">
                        <Option preValue = {hasDifficultyBreathing} error = {errorFields.hasDifficultyBreathing} handleChange = {hasDifficultyBreathingHandler} label = 'Do you have difficulty breathing? OR Fast breathing?' options = {options.difficultyBreathing}/>
                        
                        <TextArea errorMessage = 'A description of your symptom is required' preValue = {symptomsDescription} error = {errorFields.symptoms} handleChange = {symptomsHandler} label = 'Describe your symtoms' placeHolder = 'Symptoms'/>
                    </div>
                    <div className = 'ActionButtons'>
                            <Button onClick = {handlePrevious} text = 'Back' icon = 'arrow-left' iconPos = 'left' type = 'secondary'/>
                            <Button onClick = {handleNext}  text = 'Next'/>
                    </div>
                </div>
            </div>
        </FormCategory>
    );
}

export default SymptomsTwo;