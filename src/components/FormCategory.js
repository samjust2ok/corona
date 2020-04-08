import React, { Children } from 'react';
import StyledFormCategory from "../styled/StyledFormCategory";

const FormCategory = ({children,header,style})=>{
    return (
        <StyledFormCategory style = {style}>
            <div className="Logo">
                
            </div>
            <div className="FormHeader">
                <h1>{header}</h1>
            </div>
            <div className="FormContent">
                {children}
            </div>
        </StyledFormCategory>
    );
}

export default FormCategory;