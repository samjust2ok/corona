import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledNotification = styled.div`
    position:absolute;
    box-shadow: 0px 0px 1000px 1000px rgba(0,0,0,.5);
    border-radius: 25px 25px 0 0;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 30px;
    z-index:1000;
    width:100%;
    min-height:60%;
    left:0;
    background-color:white;
    flex-direction:column;


    p{
        font-size:20px;
        margin: 50px 0;
        text-align:center;
        line-height:30px;

        span{
            font-weight:bolder;
            border-bottom: 2px solid ${props=>props.theme.dscBlue}
        }
    }

    button{
        height: 60px;
        width:60px;
        border-radius:50%;
        box-shadow: -3px 3px 10px rgba(0,0,0,.2);
        background-color:${props=>props.theme.dscPink};
        border:none;
        color:white; 
        font-weight:600;
        font-size:14px;
    }
`;

export default animated(StyledNotification);