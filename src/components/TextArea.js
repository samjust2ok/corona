import React, { useState } from 'react';
import StyledTextArea from "../styled/StyledTextArea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const TextArea = ({label, error = false, handleChange, preValue, errorMessage})=>{
    const [text,setText] = useState(preValue ? preValue:'');
    const [count, setCount] = useState(0);

    const MAX_COUNT = 200;

    const handleTextChange = (e)=>{
        let text = e.target.value;
        let count = text.split('').length;
        setCount(count);
        if(count >= MAX_COUNT) return;
        setText(text)
        handleChange(text)
    }

    return (
        <StyledTextArea>
            <div className="Header">
                <p>{label}</p>
                <div className="Counter">
                    <span>
                      <b>{count}</b>/{MAX_COUNT}
                    </span>
                </div>
            </div>
            <div className="TextBox">
                <textarea haserror = {`${error}`} value = {text} onChange = {handleTextChange}>
                    
                </textarea>
            </div>
            <div className="InfoField">
                    {
                        error &&
                        <p className = 'Error'><span><FontAwesomeIcon icon = "exclamation-circle"/></span>{errorMessage}</p>
                    }
            </div>
        </StyledTextArea>
    );
}

export default TextArea;