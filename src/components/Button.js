import React from 'react';
import StyledButton from "../styled/StyledButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({text,icon, type = 'primary', onClick, iconPos = 'right'})=>{
    return (
        <StyledButton iconPos = {iconPos} onClick = {onClick} type = {type}>
            {
                iconPos === 'left' && icon &&
                <span>
                    <FontAwesomeIcon icon = {icon}/>
                </span>
            }
            {text}
            {iconPos !== 'left' && icon &&
                <span>
                <FontAwesomeIcon icon = {icon}/>
                </span>
            }
        </StyledButton>
    );
}

export default Button;