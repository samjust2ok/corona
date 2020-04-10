import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const color1 = ['#ffafbd','#2193b0','#cc2b5e','#ee9ca7','#42275a','#bdc3c7','#de6262','#06beb6','#eb3349','#56ab2f','#02aab0','#ddd6f3','#4568dc','#ff5f6d','#36d1dc']
const color2 = ['#ffc3a0','#6dd5ed','#753a88','#ffdde1','#734b6d','#2c3e50','#de6262','#48b1bf','#f45c43','#a8e063','#00cdac','#faaca8','#b06ab3','#ffc371','#5b86e5']


const getRandGradient = ()=>{
    let rand = Math.floor(Math.random() * (color1.length))
    return `linear-gradient(-45deg, ${color1[rand]}, ${color2[rand]})`;
}


const StyledSearchPage = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    
    .Container{
        display: grid;
        grid-template-rows: 70px 60px 1fr;
        height:100%;


        .Back{
            display:flex;
            align-items:center;
            padding: 0 20px;

            svg:not(:root).svg-inline--fa{
                 font-size:20px;
             }
        }

        .Search{
            padding: 0 20px;
            box-shadow: 0px 7px 5px rgba(0,0,0,.05);
        }

        .Content{
            /* overflow:hidden;
            overflow-y:scroll; */
            position: relative;
            height: 100%;

            .NCDCContact{
                position: absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                margin: auto;

                    h3{
                        text-align:center;
                    }
            }
                    
            .State{
                padding: 0px 20px;
                display:flex;
                justify-content:space-between;
                height: 100px;
                align-items:center;
                
                :hover{
                            background-color:#959eb50f;
                }
                

                :first-child{
                    margin-top:30px;
                }

                :last-child{
                    margin-bottom:30px;
                }

                .ItemContent{
                    display:flex;
                    align-items:center;
                    
                    .Initials {
                        margin-right: 10px;
                        height: 60px;
                        width: 60px;
                        border-radius:50%;
                        flex-shrink:0;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        font-size: 25px;
                        color:white;
                        background-image:${getRandGradient()};
                    }

                    .Content{
                        height:100%;
                        h3{
                            font-size:17px;
                        }
                        p{
                            font-size:14px;
                            color: ${props=>props.theme.dscText}
                        }
                    }
                }

                .Icons{
                    display: flex;
                    flex-direction:column;
                    height:100%;
                    justify-content:center;
                }
            }
        }
    }


    ${devices.mobileXL`
        .Container{
            grid-template-rows: 150px 1fr;
            .Back{
                display:none;
            }
            .Search{
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .Content{
                display:grid;
                grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
                grid-column-gap:15px;
                grid-row-gap:15px;
                padding: 30px 20px;


                .State{
                    width:100%;
                    height:250px;
                    position:relative;

                    

                    :after{
                        position:absolute;
                        content:'';
                        width:250px;
                        top:0;
                        height:100%;
                        transform: translateX(-50%);
                        left:50%;
                        z-index:-1;
                        border-radius:5px;
                        transition:background-color .2s;
                    }

                    :hover{
                            background-color:#959eb50f;
                    }
                    


                    
                    :first-child{
                        margin-top:0px;
                    }

                    :last-child{
                        margin-bottom:0px;
                    }


                    .ItemContent{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:space-between;
                        width:100%;

                        .Initials{
                            margin:0;
                            padding:0;
                            width:100px;
                            height:100px;
                        }

                        .Content{
                            margin:40px;
                            align-items:center;
                            margin:0;
                            padding:0;
                            height:auto;
                            display:flex;
                            flex-direction:column;

                        }
                    }

                    .Icons{
                        display:none;
                    }
                }
            }
        }
    `}
`;

const StyledInput = styled.div`
    position: relative;
    width:100%;
    display:grid;
    grid-template-columns: 1fr 45px;
    grid-column-gap: 10px;
    transition: .2s;

    input{
        width: 100%;
        height: 45px;
        padding: 20px;
        border: 1px solid #dadce0;
        border-radius: 22.5px;
        will-change: box-shadow;
        transition: box-shadow .3s ease-in, border .2s ease-in;

        :focus{
            border:none;
            background:white;
            box-shadow: 0px 0px 9px rgba(0,0,0,.1);
        }

        :focus ~ .Icon{
            border:none;
            background:white;
            box-shadow: 0px 0px 9px rgba(0,0,0,.1);
        }
    }

    .Icon{
        height:100%;
        width:100%;
        border: 1px solid #dadce0;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        will-change: box-shadow;
        transition: box-shadow .2s;
    }

    ${devices.mobileXL`
        max-width: 600px;

        input{
            border-radius:5px;
            height:55px;
        }

        .Icon{
            height:55px;
            width:55px;
        }
    `}
`;
export { StyledSearchPage as default, StyledInput};