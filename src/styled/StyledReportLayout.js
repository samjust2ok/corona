import styled from 'styled-components';
import { devices }  from '../utils/styledUtils';

const StyledReportLayout = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    justify-content:center;
    transition: background-color .2s ease-in;

    ${devices.mobileXL`
        align-items:center;
        background-color: rgb(24, 28, 32);
    `}
`;

export default StyledReportLayout;