import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../constants/theme';
import StyledCustomInputLarge from '../styled/StyledCustomInputLarge';


const CustomInputLarge = ({handleChange,preValue,error = false,icon, icon2,type = 'text',errorMessage,info,placeHolder})=>{
    const [value, setValue] = useState(preValue ? preValue : '');
    const [iconTwo, setIcon] = useState(false);

    const handleInputChange = (e)=>{
        let typed = e.target.value;
        setValue(typed)
        handleChange && handleChange(typed)
    }

    const ref = useRef();

    const iconClickHandler = (e)=>{
       icon && icon2 && setIcon(!iconTwo)
       if(type === 'password'){
        ref.current.type = iconTwo ? 'text':'password';
       }
    }

    return (
        <StyledCustomInputLarge error = {error}>
                <div className="InputField">
                    <div className = "InputContainer">
                        <input ref= {ref} value = {value} hasinput = {`${value.length > 0}`} onChange = {handleInputChange} type = {type}/>
                        <div>
                            {placeHolder}
                        </div>
                    </div>
                    {
                        icon &&
                        <div onClick = {iconClickHandler} className="Icon">
                            <FontAwesomeIcon color = {theme.dscPink} icon  = {iconTwo ? icon2 ? icon2 : icon :icon}/>
                        </div>
                    }
                </div>
                <div className="InfoField">
                    {
                        error ? 
                        <p className = 'Error'><span><FontAwesomeIcon icon = "exclamation-circle"/></span>{errorMessage}</p>:
                        info ? 
                        <p className = 'Info'>{info}</p>:
                        null
                    }
                </div>
        </StyledCustomInputLarge>
    );
}

export default CustomInputLarge;