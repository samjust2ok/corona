import React, { useState, useRef, useEffect } from 'react';
import FormCategory from './FormCategory'
import Button from './Button';
import Option from './Option';
import { isNull } from 'util';
import { useDispatch, useSelector } from 'react-redux';
import { storeSymptoms } from '../actions/storeActions';
import options from '../constants/options';

const iconStyle  = {display:'flex',alignItems:'center'}


const Symptoms = ({style,next,previous})=>{
    const dispatch = useDispatch();
    const selector = useSelector(state=>state.reportForm.symptoms);


    const {hasFever,hasCough,coughType,feverSeverity,hasSoreThroat,hasRunnyNose} = selector
    const [errorFields, setErrorFields] = useState({
        hasFever: false,
        hasCough: false,
        hasRunnyNose: false,
        hasSoreThroat: false,
        feverSeverity:false,
        coughType: false
    })

    const [fieldValues,setFieldValues] = useState({
        hasFever: hasFever,
        hasCough: hasCough,
        hasRunnyNose: hasRunnyNose,
        hasSoreThroat: hasSoreThroat,
        feverSeverity: feverSeverity,
        coughType: coughType,
    })

    const hasFeverHandler = (v)=>setFieldValue('hasFever',v)
    const hasCoughHandler = (v)=>setFieldValue('hasCough',v)
    const hasSoreThroatHandler = (v)=>setFieldValue('hasSoreThroat',v)
    const hasRunnyNoseHandler = (v)=>setFieldValue('hasRunnyNose',v)
    const feverSeverityHandler = (v)=>setFieldValue('feverSeverity',v)
    const coughTypeHandler = (v)=>setFieldValue('coughType',v)


    const setErrorOnNonFilledFields = ()=>{
        let { hasFever,hasSoreThroat,hasRunnyNose,hasCough,feverSeverity,coughType} = fieldValues;
        let error = {
            hasFever: isNull(hasFever),
            hasRunnyNose: isNull(hasRunnyNose),
            hasCough: isNull(hasCough),
            hasSoreThroat: isNull(hasSoreThroat),
            feverSeverity: hasFever ? isNull(feverSeverity) : false,
            coughType: hasCough ? isNull(coughType) : false
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

    const storeValues = ()=>{
        const { hasFever, feverSeverity,hasCough,coughType,hasRunnyNose,hasSoreThroat } = fieldValues;
        const symptoms = {
            hasFever,
            feverSeverity: hasFever ? feverSeverity:null,
            hasCough,
            coughType: hasCough ? coughType:null,
            hasRunnyNose,
            hasSoreThroat
        }
        dispatch(storeSymptoms(symptoms))
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
        <FormCategory style = {style} header = 'Symtoms'>
            <div className="Content">
                <div className="Fields ScrollbarHide">
                    <div className="FieldInputs">
                        <Option preValue = {hasFever} complimentPreValue = {feverSeverity} error = {errorFields.hasFever} handleChange = {hasFeverHandler} complimentHandler = {feverSeverityHandler} hasCompliment = {true} compliment = {options.complimentFever} label = 'Do you have a fever?' options = {options.hasCough}/>
                        <Option preValue = {hasCough} complimentPreValue = {coughType} complimentHandler = {coughTypeHandler} error = {errorFields.hasCough} handleChange = {hasCoughHandler} hasCompliment = {true} compliment = {options.complimentCough} label = 'Do you have Cough?' options = {options.yesNo}/>
                        <Option preValue = {hasRunnyNose} error = {errorFields.hasRunnyNose} handleChange = {hasRunnyNoseHandler} label = 'Do you have a runny nose?' options = {options.yesNo}/>
                        <Option preValue = {hasSoreThroat} error = {errorFields.hasSoreThroat} handleChange = {hasSoreThroatHandler} label = 'Do you have a sore throat?' options = {options.yesNo}/>
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

export default Symptoms;