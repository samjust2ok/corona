import React, {useState} from 'react';
import StyledCustomInput from '../styled/StyledCustomInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../constants/theme';
import LinLoader from './LinLoader';


const CustomInput = ({handleChange,success = false, successMessage,loading = false, preValue,error = false,icon, type = 'text',errorMessage,info,placeHolder})=>{
    const [value, setValue] = useState(preValue ? preValue : '');

    const handleInputChange = (e)=>{
        let typed = e.target.value;
        setValue(typed)
        handleChange && handleChange(typed)
    }

    return (
        <StyledCustomInput error = {error}>
                <div className="InputField">
                    <div className = "InputContainer">
                        <input value = {value} hasinput = {`${value.length > 0}`} onChange = {handleInputChange} type = {type}/>
                        <div>
                            {placeHolder}
                        </div>
                    </div>
                    {
                       loading ?
                       <LinLoader color = {theme.dscPink}/> : 
                       icon &&
                        <div className="Icon">
                            <FontAwesomeIcon color = {theme.dscPink} icon  = {icon}/>
                        </div>
                    }
                </div>
                <div className="InfoField">
                    {
                        success ? 
                        <p className = 'Success'><span><FontAwesomeIcon icon = "check-circle"/></span>{successMessage}</p>:
                        error ? 
                        <p className = 'Error'><span><FontAwesomeIcon icon = "exclamation-circle"/></span>{errorMessage}</p>:
                        info ? 
                        <p className = 'Info'>{info}</p>:
                        null
                    }
                </div>
        </StyledCustomInput>
    );
}

export default CustomInput;