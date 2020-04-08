import React, {useState} from 'react';
import StyledReportFormHandler from "../styled/StyledReportFormHandler";
import UserInfoForm from './UserInfoForm';
import Symptoms from './Symptoms';
import TravelHistory from './TravelHistory';
import MedicalHistory from './MedicalHistory';
import General from './General';
import { Transition, config } from 'react-spring/renderprops';
import SymptomsTwo from './SymptomsTwo';

const ReportFormHandler = ()=>{
    const [active, setActive] = useState(0);
    const [slideState,setSlideState] = useState({
        activeIndex: 0,
        previousIndex:0,
        swipeDirection:''
    })

    const length = 6;

    const increment = () => setSlideState(prevState => ({
          swipeDirection: 'right',
          activeIndex:
            prevState.activeIndex === length - 1
              ? 0
              : prevState.activeIndex + 1,
    }));

    const decrement = () => setSlideState(prevState => ({
        swipeDirection: 'left',
        activeIndex:
            prevState.activeIndex === 0
              ? length - 1
              : prevState.activeIndex - 1,
    }));

    return (
        <StyledReportFormHandler>
            <Transition
                from={{
                transform: `translate3d(${
                    slideState.swipeDirection === 'right' ? '' : '-'
                }100%,0,0)`,
                opacity: 0,
                }}
                enter={{ transform: 'translate3d(0px,0,0)', opacity: 1 }}
                leave={{
                transform: `translate3d(${
                    slideState.swipeDirection === 'right' ? '-' : ''
                }100%,0,0)`,
                opacity: 0,
                }}
                items={slideState.activeIndex}
                config={config.stiff}
                
            >
                    {idx => props => <Component next = {increment} previous = {decrement}  index = {idx} props = {props}/>}
            </Transition>

            <div className="PageIndicators">
                {
                    new Array(6).fill('').map((elem,i)=>{
                        return (
                            <div key = {i} data-index = {i} className={`Indicator ${i === slideState.activeIndex ? 'Active':''}`}>

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