import styled from 'styled-components';
import { devices } from '../utils/styledUtils';
import { animated } from 'react-spring';

let StyledFormCategory = styled.div`
    height: 100%;
    width:100%;
    overflow:hidden;
    padding:0px 30px;
    flex-shrink:0;
    position:relative;
    display:flex;
    flex-direction:column;

    .FormHeader{
        display:flex;
        align-items:center;
        height:70px;
        flex-shrink:0;

        h1{
            font-weight:500;
            font-size:20px;
        }
    }

    .FormContent{
        width:100%;
        flex-grow:1;
        padding: 30px 0;
    

        .Content{
            width:100%;

            .Fields{
                width: 100%;
                overflow-y:scroll;


                .Two-Field-Phone{
                        display:grid;
                        width:100%;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                        grid-column-gap:15px;

                        .Selector{
                            margin:20px 0 10px 0;
                        }
                }

                .Icon-Side-Field{
                    display:grid;
                    grid-template-columns:90% 10%;
                    grid-template-rows:1fr;
                    grid-column-gap:15px;
                }

                .ActionButtons{
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin-top:50px;
                }
            }
        }
    }

    ${devices.mobileXL`
        grid-template-rows: 60px 1fr;

        .FormHeader{
            h1{
                font-size:25px;
            }
        }
        .FormContent{
            padding:0;
                .Content{
                display: flex;

                .Fields{
                    width:100%;

                    .Field-Layout{
                        margin:20px 0;
                    }
                    .Two-Field{
                        display:grid;
                        width:100%;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                        grid-column-gap:15px;
                    }
                    .Two-Field-Phone{
                        .Selector{
                            margin:10px 0;
                        }
                }


                }
            }
        }
    `}

    ${devices.laptop`
        .FormContent{
                .Content{
                display:block;
            } 
        }
    `}

`;

StyledFormCategory = animated(StyledFormCategory);

export default StyledFormCategory;