import React, {useState} from 'react';
import StyledReportFormHandler from "../styled/StyledReportFormHandler";
import UserInfoForm from './UserInfoForm';
import Symptoms from './Symptoms';
import TravelHistory from './TravelHistory';
import MedicalHistory from './MedicalHistory';
import General from './General';
import SymptomsTwo from './SymptomsTwo';
import _ from 'lodash';

const ReportFormHandler = ()=>{
    const [slideIndex,setSlideState] = useState(0)

    const length = 6;

    const increment = () => setSlideState(_.clamp(slideIndex+1,0,length));

    const decrement = () => setSlideState(_.clamp(slideIndex-1,0,length));

    return (
        <StyledReportFormHandler>
            <Component next = {increment} previous = {decrement}  index = {slideIndex}/>
            <div className="PageIndicators">
                {
                    new Array(6).fill('').map((elem,i)=>{
                        return (
                            <div key = {i} data-index = {i} className={`Indicator ${i === slideIndex ? 'Active':''}`}>

                            </div>
                        );
                    })
                }
            </div>
        </StyledReportFormHandler>
    );
}


let Component = ({index,props,next,previous})=>{
    return ( 
            <>
            {
                index === 0?
                <UserInfoForm next = {next} previous = {previous} style = {props}/>:
                index === 1 ?
                <Symptoms next = {next} previous = {previous} style = {props}/>:
                index === 2 ?
                <SymptomsTwo next = {next} previous = {previous} style = {props}/>:
                index === 3 ?
                <MedicalHistory next = {next} previous = {previous} style = {props}/>:
                index === 4 ?
                <TravelHistory next = {next} previous = {previous} style = {props}/>:
                index === 5 ?
                <General next = {next} previous = {previous} style = {props}/>:
                null
            }
            </>
    )
}
export default ReportFormHandler;