import styled from 'styled-components';
import { devices } from '../utils/styledUtils'
const height = 50;

const StyledProfile = styled.div`
    height: 100%;
    width: 100%;
    position:relative;


    .Container{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 70px 70px 120px 1fr 100px;
        transition: width .2s;
    }

    .Back{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 0 20px;

        svg:not(:root).svg-inline--fa{
            font-size:20px;
        }

    }

    .Title{
        padding: 0 20px;
        font-family: 'Poppins', sans-serif;
        font-weight:900;
    }
    
    .Identity{
        display:flex;
        align-items:center;
        justify-content:center;

        .Overlay{
            height: 120px;
            width:120px;
            position:relative;
            border-radius:50%;
            background:white;
            padding:5px;
            box-shadow: 0px -5px 17px rgba(0,0,0,.1);
            

            .Initials{
                height:100%;
                width:100%;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                font-weight:900;
                font-size:25px;
                background-image: linear-gradient(45deg, #36d1dc,#5b86e5);
            }


            .Reported{
                height: 30px;
                width:30px;
                border-radius:50%;
                position:absolute;
                right: 0px;
                bottom: 10px;
                background-color:#11a711;
                display:flex;
                align-items:center;
                justify-content:center;

                

                svg:not(:root).svg-inline--fa{
                    font-size:15px;
                    color:white;
                }
            }
        }
    }

    .Contents{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        padding: 0 30px;
    }

    .Logout{
        display:flex;
        justify-content:center;
        padding: 0 30px;

        button{
            padding: 15px 25px;
            height:50px;
            border: none;
            background-color:white;
            font-size:14px;
            border-radius:30px;
            box-shadow: 0px 12px 15px rgba(0,0,0,.07);
            font-weight:600;

            svg:not(:root).svg-inline--fa{
                font-size:15px;
                margin-right:10px;
                color: ${props=>props.theme.dscLightBlue};
            }
        }
    }

    ${devices.mobileXL`
        display:flex;
        align-items:center;
        justify-content: center;
        position:relative;

        ::after{
             position:absolute;
             content: 'Profile';
             top: 30px;
             font-size:10em;
             left: 50px;
             font-family: 'Poppins', sans-serif;
             font-weight: 900;
             z-index: -1;
             opacity:0.05;
        }

         

        .Container{
            background:white;
            width: 500px;
            height: 85%;
            border-radius: 10px;
            box-shadow: 0px -5px 17px rgba(0,0,0,.1);
            grid-template-rows: 70px 100px 1fr 70px;

            .Identity{
                .Overlay{
                    height:100px;
                    width:100px;

                    .Initials{
                        font-size:20px;
                    }

                    .Reported{
                        height:25px;
                        width:25px;

                        svg:not(:root).svg-inline--fa{
                            font-size:13px;
                        }
                    }
                }
            }

             .Title{
                 display:none;
             }
        }
    `}

    ${devices.tablet`
        .Container{
            box-shadow: 0px -5px 17px rgba(0,0,0,.1);
        }
    `}
`;

const StyledDisplay = styled.div`
    width: 100%;
    height: ${`${height}px`};
    border-radius: ${`${height/2}px`};
    border: 1px solid #dddfe0;
    margin: 15px 0;
    padding: 0 20px;
    position:relative;
    display:flex;
    align-items:center;


    .Tag{
        position:absolute;
        color: ${props=>props.theme.dscText};
        text-transform:uppercase;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        top: -10px;
        padding: 0 5px;
        left:18px;
        background-color:white;
    }

    .Value{
        font-weight:bolder;
        
    }

    
`;

export { StyledProfile as default, StyledDisplay};