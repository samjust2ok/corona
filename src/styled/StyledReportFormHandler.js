import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledReportFormHandler = styled.div`
    width: 100%;
    transition: .2s;
    position:relative;
    display:flex;
    display:grid;
    grid-template-rows: 1fr 40px;
    

    .PageIndicators{
        width:100%;
        display:flex;
        justify-content:center;
        z-index:-1;
        
        .Indicator{
            width:40px;
            height:3px;
            margin:5px;
            background-color:#93fd93;
        }

        .Active{
            background-color:green;
        }
    }
    
    ${devices.mobileXL`
        border: 1px solid #dadce0;
        border-radius :8px;
        height:90%;
        width: 450px;
        max-height:90%;
        
        .PageIndicators{
            // top: calc(100% + 20px);
            display:flex;
            justify-content:center;
        }
    `}

    ${devices.laptop`
        width: 750px;
    `}
`;

export default StyledReportFormHandler;