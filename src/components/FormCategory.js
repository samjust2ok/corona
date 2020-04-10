import React from 'react';
import StyledFormCategory from "../styled/StyledFormCategory";
import { useTransition } from 'react-spring';


const FormCategory = ({children,header,style})=>{
    return (
        <StyledFormCategory className = "Scrollbar" style = {style}>
            <div className="FormHeader">
                <h1>{header}</h1>
            </div>
            <div className="FormContent">
                {children}
            </div>    
        </StyledFormCategory>
    )
}

export default FormCategory;