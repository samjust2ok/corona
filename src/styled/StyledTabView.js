import styled from 'styled-components';
import { animated } from 'react-spring';
import { devices } from '../utils/styledUtils';

const StyledTabView = styled.div`
    width: 100%;
`;



const TabHeader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    /* position:relative; */
    height:60px;
    background-color: white;
    position:sticky;
    top:70px;
    z-index:1000;
    max-width: 700px;


    .Tab{
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:600;
        font-size:15px;

        p{
            pointer-events:none;

            &[current = true]{
                color: ${props=>props.theme.dscPink}
            }
        }
    }

    .Indicator{
        position:absolute;
        height: 3px;
        width: calc(100%/3);
        left:0;
        bottom:0;
        
        div{
            background-color: ${props=>props.theme.dscPink};
            margin: 0 auto;
            width:50%;
            height: 3px;
        }
    }

    ${devices.tablet`
        margin: 0 20px;
        .Tab{
            justify-content: flex-start;
            
        }

        .Indicator{
            
            div{
                margin:0;
                width: 40%;
            }
        }
    `}
`;

const TabBodyDef = styled.div`
    width: 100%;
    display:flex;
    height:600px;
    

    .TabContent{
        width:100%;
        flex-shrink:0;
        flex-wrap:nowrap;
        padding: 10px;
    }

    ${devices.tablet`
        padding: 0 20px;
        .Tab{
            justify-content: flex-start;
            
        }

    `}
`;

const TabBody = animated(TabBodyDef);

export {StyledTabView as default, TabHeader,TabBody};