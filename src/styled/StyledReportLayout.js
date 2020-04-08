import styled from 'styled-components';
import { devices }  from '../utils/styledUtils';

const StyledReportLayout = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    justify-content:center;

    ${devices.mobileXL`
        align-items:center;
    `}
`;

export default StyledReportLayout;