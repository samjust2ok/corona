import styled from 'styled-components';
import { devices } from '../utils/styledUtils'
const StyledCustomInput = styled.div`
    width:100%;


    .InputField{
        display:flex;
        width:100%;
        margin:20px 0 10px 0;
        position:relative;

        .InputContainer{
            width: 100%;
            flex-grow:1;
            position:relative;

            input{
                width:100%;
                height: 40px;
                border: ${props=>props.error ? '2px solid #d93025':'1px solid #dadce0'};
                border-radius:5px;
                padding: 0 10px;
                transition: .2s;
                z-index:1;
            }

            input:focus{
                border: ${props=>props.error ? '2px solid #d93025':'2px solid #1a73e8'}
            }

            
            div{
                pointer-events:none;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#5f6368;
                padding:0 6px;
                margin:0 6px;
                transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
                transform-origin: top left;
            } 

            input[hasinput = true] ~ div{
                transform: scale(.75) translateY(-37px);
                color:${props=>props.error ? '#d93025':'#5f6368'};
                background-color:white;
            }

            input:focus ~ div{
                transform: scale(.75) translateY(-37px);
                color:${props=>props.error ? '#d93025':'#1a73e8'};
                background-color:white;
            }

        }

        .Icon{
            position:absolute;
            right: 10px;
            top:50%;
            transform: translateY(-50%);
            color:'#5f6368'
        }
    }

    .InfoField{
        font-size:12px;


        .Success{
            color: green;

            span{
                margin-right:7px;
            }
        }
        
        .Error{
            color:#d93025;

            span{
                margin-right:7px;
            }
        }

        .Info{
            margin:0;
        }
    }

    ${devices.mobileXL`
        .InputField{
            margin:10px 0;
        }
    `}
`;

export default StyledCustomInput;