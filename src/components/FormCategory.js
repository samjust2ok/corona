import React from 'react';
import StyledFormCategory from "../styled/StyledFormCategory";

const FormCategory = ({children,header,style,index})=>{
    return (
        <StyledFormCategory style = {style}>
            <div className="FormHeader">
                <h1>{header}</h1>
            </div>
            <div className="FormContent">
                {children}
            </div>
            <div className="PageIndicators">
                {
                    new Array(6).fill('').map((elem,i)=>{
                        return (
                            <div key = {i} data-index = {i} className={`Indicator ${i === index ? 'Active':''}`}>

                            </div>
                        );
                    })
                }
            </div>
        </StyledFormCategory>
    );
}

export default FormCategory;