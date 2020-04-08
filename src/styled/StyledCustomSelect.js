import styled from 'styled-components';
import { devices } from '../utils/styledUtils';


const StyledCustomSelect = styled.div`
    width:100%;
    position:relative;


    .Selector{
        width:100%;
        position:relative;
        margin:10px 0;

        .SelectorDisplay{
            width: 100%;
            position:relative;
            height: 35px;
            border: ${props=>props.error ? '2px solid #d93025':'1px solid #dadce0'};
            border-radius:5px;
            padding: 0 10px;
            transition: .2s;
            z-index:1;

            .PlaceHolder{
                pointer-events:none;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#5f6368;
                transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
                transform-origin: top left;
            }

            .Value{
                pointer-events:none;
                position: absolute;
                text-transform:capitalize;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#5f6368;
            }

            .PlaceHolder[optionselected = false]{
                transform: scale(.75) translateY(-35px);
                color:${props=>props.error ? '#d93025':'#5f6368'};
                background-color:white;
                padding:0 6px;
                margin:0 -6px;
            }
        }

        .SelectorDisplay[focused = true]{
             border: ${props=>props.error ? '2px solid #d93025':'2px solid #1a73e8'}
        }

        .SelectorDisplay[focused = true] .PlaceHolder{
            transform: scale(.75) translateY(-35px);
            padding:0 6px;
            color:${props=>props.error ? '#d93025':'#1a73e8'};
            background-color:white;
            margin:0 -6px;
        }

        .Icon{
            position:absolute;
            right: 10px;
            top:50%;
            transform: translateY(-50%);
        }
    }

    .InfoField{
        font-size:12px;
        
        .Error{
            color:#d93025;

            span{
                margin-right:7px;
            }
        }

        .Info{

        }
    }

    .Options{
        position:absolute;
        top:100%;
        width:100%;
        background-color:white;
        padding:10px 0;
        z-index:100;
        border: 1px solid #dadce0;
        border-radius:5px;
        margin:15px 0;
        z-index:10000;
        overflow:scroll-behavior;

        li{
            padding: 10px 15px;
            font-size: 14px;
        }
    }

    ${devices.mobileXL`
        .InputField{
            margin:10px 0;
        }
    `}
`;

export default StyledCustomSelect;