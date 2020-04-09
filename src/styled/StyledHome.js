import styled, {keyframes} from 'styled-components';
import { devices } from '../utils/styledUtils';
import cp from '../images/map.jpg';
import bgc from '../images/curved-pattern.png';
import man from '../images/men.png';
import { animated } from 'react-spring';

const glideUp = keyframes`
    0% {
    transform: translateY(50%);
    opacity: 0;
    }
    40% {
        transform: translateY(20%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }

`

const moveCurve = keyframes`
    0%, 20% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
    }

    50% {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
    51%, 60% {
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
    100% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`;
const Home = styled.div`
    width:100vw;
    /* overflow:hidden; */
`;

const Navigation = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
    transform: translateY(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color:${props=>props.theme.dscBGFull};
    height: 70px;
    padding: 16px;
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid rgba(240,242,243,0.6);
    z-index:100;
    transition: background-color .2s;

    div{
        flex-grow:0;

        svg:not(:root).svg-inline--fa{
            font-size:25px;
        }

        :nth-child(2){
            width:20px;
        }
    }

    .Links{
        font-family: 'Poppins', sans-serif;
        display:none;
        letter-spacing: -0.01em;
        height:100%;
        ul{
            height:100%;
            display:flex;

            .NavItem{
                height:100%;
                position:relative;
                display:flex;
                align-items: center;
                margin-bottom: 0;
                margin-right: 40px;

                    :hover .Dropdown{
                        opacity: 1;
                        visibility: visible;
                        transform: translate(-50%,0px);
                    }

                

                    .NavTitle{
                        display:flex;
                        min-width: 60px;
                        height:100%;
                        display:flex;
                        align-items:center;
                        font-weight:700;
                        color:#03162d;
                        transition: color .3s;

                        :hover{
                            color: ${props=>props.theme.dscLightBlue}
                        }

                        p{
                            margin-right:10px;
                        }


                        svg:not(:root).svg-inline--fa{
                            font-size:17px;
                        }

                        
                    }

                    .Dropdown{
                        position:absolute;
                        width: 250px;
                        top: 100%;
                        left: 50%;
                        will-change: transform opacity;
                        transform: translate(-50%,-20px);
                        visibility: hidden;
                        transition: transform .5s, opacity .5s;
                        background:white;
                        opacity:0;
                        padding: 10px 0;
                        display:flex;
                        flex-direction:column;
                        border: solid 1px rgba(0,0,0,0.04);
                        box-shadow: 0 8px 16px 0 rgba(3,49,86,0.08);
                        border-radius: 6px;
                        z-index: 120;
                        

                         .Dropdown-Item{
                            padding: 15px 20px;
                         }


                         .Share{
                            font-weight:700;
                            color:#03162d;
                            :hover{
                                color: ${props=>props.theme.dscLightBlue};
                            }
                             button{
                                display:flex;
                                align-items:center;

                                span{
                                    margin-left:20px;
                                }
                             }
                         }

                         .Account{
                             a{
                                color: #03162d;
                                font-weight:700;
                                :hover{
                                    color:${props=>props.theme.dscLightBlue};
                                }
                             }

                             p{
                                 font-size:14px;
                                 margin-top: 15px;
                             }
                         }
                    }

                    
            }
        }
    }


    ${devices.mobileXL`
        padding: 0px;
        .Links{
            display:block;
        }
        .MenuIcon{
            display:none;
        }
    `}
`

const NavigationContent = styled.div`
    height: 100vh;
    background-image:radial-gradient(circle,rgba(255,255,255,1) 10%,rgba(255,255,255,0.95));
    width:80%;
    position:absolute;
    left:0;
    top:0;
    z-index:10000;
    display:flex;
    flex-direction:column;
    will-change: box-shadow;
    box-shadow: '';
    justify-content:center;
   
    /* transition-delay:.2s; */
    &.show-shadow{
        box-shadow: 0 0 0 500px rgba(0,0,0,.3);
    }

     ul{
         padding: 0 20px;
         li{
             margin: 40px 0;
             display:flex;
             align-items:center;
             color: ${props=>props.theme.dscText};
             
             svg:not(:root).svg-inline--fa{
                 font-size:20px;
             }

             button{
                 a{
                    color:white;
                 }
             }

             a,span{
                 font-size: 18px;
                 font-weight:600;
                 color: black;
                 margin-left: 15px;

                 :active{
                     color: ${props=>props.theme.dscLightBlue}
                 }
             }
         }
     }

     ${devices.mobileXL`
        display:none;
    `}
`


const HeaderContent = styled.div`
    padding: 0 20px;
    position:relative;
    background-color:${props=>props.theme.dscBGLight};
    height:800px;

    .FocusedContent{
        z-index:-1;
        width:100%;
        height:60%;
        padding-top:70px;
        display:flex;
        flex-direction:column;
        justify-content:center;

        h1{
            font-weight:900;
            animation-name: ${glideUp};
            animation-duration: .4s;
            animation-fill-mode: both;
            animation-delay: .4s;
            line-height:1.2;
            font-family: 'Poppins', sans-serif;
        }

        p{
            animation-duration: .6s;
            animation-fill-mode: both;
            animation-name: ${glideUp};
            animation-delay: .3s;
            line-height:1.2;
            margin: 30px 0;
            font-size:15px;
            line-height: 1.5;
            letter-spacing: -0.01em;
            -webkit-font-smoothing: antialiased;

            a{
                color: ${props=>props.theme.dscPink};
                :active{
                    border:none;
                }
            }
        }
    }

    .HeaderFooter{
        display:flex;
        flex-direction:column;

        .OurPartners{
            margin-bottom:10px;
        p{
            font-weight:800;
        }
        .Partners{
            display:flex;
            flex-wrap:nowrap;
            margin-top:10px;
            

            img{
                max-height:40px;
                width:auto;
                margin-right:10px;

                :nth-child(1){
                    transform:scale(0.8);
                    transform-origin:left;
                }
            }
        }
    }

    .MoreDetails{
        border-top: 1px solid rgba(240,242,243,0.6);
        margin: 30px 0;
        padding:40px 0;
        p{
            font-weight:800;
        }
        .Steps{
            display:grid;
            grid-template-columns:200px 200px 200px;
            overflow-x:scroll;
            grid-column-gap:25px;
            height:180px;
            place-items:center;
            
            
            .Step{
                height:70px;
                width:180px;
                display:flex;
                align-items:center;
                justify-content:center;
                background-color:white;
                margin-left:30px;
                position:relative;
                box-shadow:-3px 3px 7px rgba(0,0,0,.05);
                padding:10px;
                padding-left:45px;
                animation-name: ${glideUp};
                animation-duration: .4s;
                animation-fill-mode: both;
                animation-delay: .3s;
            

                p{
                    font-size:12px;
                    font-weight:lighter;
                }
                

                 .Icon{
                     padding:30px;
                     box-shadow:-3px -3px 7px rgba(0,0,0,.05);
                     box-sizing:border-box;
                     height:50px;
                     width:50px;
                     border-radius: 50%;
                     position:absolute;
                     left: -25px;
                     top: -25px;
                     display:flex;
                    align-items:center;
                    font-size:16px;
                    justify-content:center;
                    background-color:white;
                    /* margin: 0 20px; */
                 }
            }
        }
    }
    }
    
    ${devices.tablet`
        padding: 0 60px;
        
        .FocusedContent{
            width: 600px;
            h1{
                font-size: 2.7rem;
                width: 600px;
            }

            p{
                font-size: 18px;
            }
        }

        
    `}

    ${devices.laptop`
        height: 100vh;
        padding-top: 100px;
        .HeaderFooter{
            flex-direction: row;
            justify-content: space-between;
            height: 200px;
            align-items: center;
            
            .MoreDetails{
                
                p{
                    display:none;
                }

                .Steps{
                    overflow: hidden;
                    place-items: center;
                    .Step{
                        z-index:10000;
                        height: 70px;
                        p{
                            display:block;
                        }

                        .Icon{
                            z-index:10000;
                        }
                    }
                }
                border: none;
                margin: 0;
                padding:0;
            }
        }
    `}
`;

const Button = styled.button`
    border: none;
    width:fit-content;
    height: 50px;
    line-height: 50px;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    color: white;
    will-change: transform, box-shadow;
    transition: ease-in-out 0.3s all;
    border-radius: 5px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    font-family:inherit;
    font-weight:600;
    background-color:${props=>props.theme.dscBGDark};

    a{
        font-weight:600;
        color:white;
        :active{
        color:white;
        }
    }


    :hover{
        background-color: #41aa5e;
        transform: translate(0, -1px);
        box-shadow: 0 6px 2px -6px rgba(42,134,68,0.6);
    }

    
`;


const Information = styled.div`
    padding: 50px 0px;
    background-color:white;

    .Header{
        padding: 0px 20px;
        h1{
            font-weight:900;
            animation-name: ${glideUp};
            animation-duration: .4s;
            animation-fill-mode: both;
            animation-delay: .4s;
            line-height:1.2;
            font-family: 'Poppins', sans-serif;
        }

        p{
            margin: 15px 0 30px 0;
            line-height: 20px;
            font-size: 14px;
        }
    }
`;

const CallCenter = styled.div`
    position:relative;
    height: 300px;
    width:100%;
    background: rgb(249, 251, 252);


    .Container{
        width:100%;
        position:relative;
        height: 100%;
        
         .Content{
            position:relative;
            animation: ${moveCurve} linear 1s;
            padding: 50px 0;
            display: flex;
            height:100%;
            flex-direction:column;
            justify-content:center;
            padding: 0 20px;

                h1{
                    font-family: 'Poppins', sans-serif;
                    color:#03162d;
                }

                p{
                    margin: 20px 0;
                    width:90%;
                }

                button{
                    border: none;
                    width:fit-content;
                    height: 50px;
                    line-height: 50px;
                    padding-left: 2em;
                    padding-right: 2em;
                    font-size: 16px;
                    font-weight: 500;
                    background-color: white;
                    border-radius:3px;
                    box-shadow: 2px 3px 2px rgba(0,0,0,.1);
                    color: #03162d;

                        a{
                            color:black;
                            :active{
                                color:black;
                            }
                        }

                        span{
                            margin-right: 10px;
                        }
                }
         }
    }

    ${devices.tablet`
        .ReportNow{
            .Container{
                .Content{
                    h1{
                        font-size: 3rem;
                    }

                    p{
                        font-size:18px;
                    }
                }
            }
    `}
`;



const Footer = styled.div`

    
    .ReportNow{
        width:100%;
        position:relative;
        height: 500px;


        :before{
            background-image: url(${bgc});
            background-size: inherit;
            background-position: 0 50px;
            background-repeat: repeat-x;
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.2;
        }
        .Info{
            position:relative;
            animation: ${moveCurve} linear 1s;
            padding: 50px 0;
            display: flex;
            height:100%;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding: 0 20px;

        div{
            h1{
            text-align:center;
            margin:15px 0 40px 0;
            font-weight: 900;
            font-family: 'Poppins', sans-serif;
            }

            p{
                text-align:center;
            }

        }
     }
    }

     .ContactContainer{
         padding: 0 20px;
         .Contact{
         padding: 20px 0;
         border-top: 1px solid rgba(240,242,243,0.6);
         p{
            font-weight: 600;
            margin: 14px 0;
            font-size:18px;
            color: ${props=>props.theme.dscText};
            font-family: 'Poppins', sans-serif;
         }
         .SocialMedia{
             p{
                margin:0;
                font-size: 16px;
                color: ${props=>props.theme.dscLightBlue};
                font-family: 'Montserrat', sans-serif;
             }
             .Icons{
                margin: 10px 0;
                 a{
                     
                     margin-right: 20px;

                     svg:not(:root).svg-inline--fa{
                        font-size:24px;
                        color: ${props=>props.theme.dscText};
                    }

                    :active{
                        color: ${props=>props.theme.dscPink};
                    }
                 }
             }
         }
        }
     }

     .Location {
         padding: 50px 0;
         p{
             font-size:16px;
             color: ${props=>props.theme.dscText};

             :nth-child(1){
                 font-weight:600;
                 font-size:18px;
                 margin-bottom: 15px;
                 font-family: 'Poppins', sans-serif;
             }
         }
     }

     .Image{
         img{
             height: 60px;
             margin-left:-10px;
         }
     }


     ${devices.tablet`
        .ReportNow{
            .Info{
                display: flex;
                justify-content: space-between;
                flex-direction:row;
                padding: 0 60px;
                align-items:center;

                div{
                    h1{
                        text-align:left;
                        font-size:2.9em;
                        width:70%;
                    }

                    p{
                        text-align:left;
                        font-size:20px;
                    }
                }
            }
        }
    `}
`;


const StyledShare = styled.div`
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position:absolute;
        background:white;
        z-index:100;
        max-width: 80%;
        width:350px;
        border-radius: 10px;
        overflow:hidden;
        box-shadow: 0px 0px 0 5000px rgba(0,0,0,.5);
        z-index:1000;
        font-family: 'Poppins', sans-serif;

        .Header{
            padding: 20px 20px;
            border-bottom: 1px solid rgba(240,242,243,0.6);
            display:flex;
            justify-content: space-between;
            font-size: 16px;
            align-items:center;
            border-bottom
        }
        
        .Dropdown{
            background:white;
            padding-bottom: 20px;
            display:flex;
            flex-direction:column;
            z-index: 120;
            

            .Dropdown-Item{
                padding: 15px 20px;
            }


            .Share{
                font-weight:700;
                color:#03162d;
                :hover{
                    color: ${props=>props.theme.dscLightBlue};
                }
                button{
                    display:flex;
                    align-items:center;
                span{
                    margin-left:20px;
                }
            }
    }
}
`;

const ShareCard = animated(StyledShare)

export {Home as default, NavigationContent,Navigation,HeaderContent,CallCenter,Button, Information,Footer,ShareCard};