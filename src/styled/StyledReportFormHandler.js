import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledReportFormHandler = styled.div`
    width: 100%;
    transition: .2s;
    position:relative;
    display:grid;
    grid-template-rows:1fr 50px;

    
    .PageIndicators{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:-1;
        padding:0px 20px;
        
        .Indicator{
            width:calc(100%/7);
            height:3px;
            margin:5px;
            background-color:#93fd93;
            flex-shrink:1;
        }

        .Active{
            background-color:green;
        }
    }

    
    
    ${devices.mobileXL`
        background-color: white;
        border-radius :5px;
        height:90%;
        width: 450px;
        max-height:1000px;
    `}
`;

export default StyledReportFormHandler;