import React from 'react';
import StyledLinLoader from '../../styled/StyledLinLoader';


export default ({color = 'white'})=>{
    return(
        <StyledLinLoader color = {color} className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLinLoader>
    );
}