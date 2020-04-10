import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledFormCategory = styled.div`
    height: 100%;
    width:100%;
    overflow:hidden;
    padding:0px 40px;
    flex-shrink:0;
    display:grid;
    grid-template-rows:100px 1fr 70px;
    position:relative;

    .FormHeader{
        display:flex;
        align-items:center;

        h1{
            font-weight:500;
            font-size:25px;
        }
    }

    .FormContent{
        height:100%;
        width:100%;
        overflow:hidden;

        .Content{
            height:100%;
            width:100%;

            .Fields{
                width: 100%;
                height:100%;
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


    .PageIndicators{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:-1;
        margin:20px 0;
        
        .Indicator{
            width:calc(100%/7);
            height:3px;
            margin:5px;
            background-color:#93fd93;
        }

        .Active{
            background-color:green;
        }
    }

    ${devices.mobileXL`
        grid-template-rows: 60px 1fr;
        .FormContent{
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

export default StyledFormCategory;