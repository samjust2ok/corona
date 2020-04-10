import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledReportFormHandler = styled.div`
    width: 100%;
    transition: .2s;
    position:relative;
    height:100%;
    overflow:hidden;

    
    
    ${devices.mobileXL`
        border: 1px solid #dadce0;
        border-radius :8px;
        height:90%;
        width: 450px;
        max-height:1000px;
    `}
`;

export default StyledReportFormHandler;