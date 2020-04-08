import styled from 'styled-components';
import { devices } from '../utils/styledUtils';
import checked from '../images/checked-pattern-blue.png'

const StyledLogin = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    will-change:width;
    
    

    .Container{
        display: grid;
        will-change:width;
        transition: width .2s;
        grid-template-rows: 70px 70px 1fr 100px;
        height: 100%;
        width: 100%;
        background-color:white;
        z-index:100;
        .Back{
        padding: 0 20px;
        display: flex;
        align-items:center;

        svg:not(:root).svg-inline--fa{
            font-size:22px;
        }
    }

    .Header{
        padding: 0 20px;
    }

    .Form{
        padding: 0 20px;


        .Error-Report{
            height: 55px;
            width:100%;
            border-radius: 5px;
            background: #fd000012;
            display:flex;
            align-items:center;
            padding: 15px;
            color: #fd0000d6;
            margin-bottom: 30px;
            
            svg:not(:root).svg-inline--fa{
                font-size:20px;
            }

            p{
                margin-left:15px;
                font-weight: 500;
            }
        }
    }

    .Footer{
        padding: 0 20px;
        display: flex;
        align-items:center;
        justify-content:center;
        font-weight:bolder;

        a{
            color: ${props=>props.theme.dscLightBlue}
        }
    }
    }

        ${devices.mobileXL`
            ::before{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                content: ''
            }

            ::before{
                background-image: url(${checked});
                opacity: .2;
                background-repeat:no-repeat;
                background-position: -90px 100px;
            }
            .Container{
                width: 450px;
                height: 85%;
                max-height: 700px;
                grid-template-rows: 100px 1fr 70px;
                border: 1px solid #dadce0;
                padding: 50px 0;

                .Back{
                    display: none;
                }
                .Header{
                    h1{
                        text-align:center;
                    }
                }
            }
        `}
   
`;

export { StyledLogin as default}