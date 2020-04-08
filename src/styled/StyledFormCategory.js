import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledFormCategory = styled.div`
    height: 100%;
    width:100%;
    overflow:hidden;
    padding:20px 40px 40px 40px;
    flex-shrink:0;
    display:grid;
    grid-template-rows: 60px 60px 1fr;
    position:relative;

    .Logo{

    }


    .FormHeader{
        margin:10px 0;

        h1{
            font-weight:500;
            font-size:25px;
        }
    }

    .FormContent{
        height:100%;
        .Content{
            height:100%;
            .Fields{
                width: 100%;
                display:flex;
                flex-direction:column;
                height:100%;


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

                .FieldInputs{
                    height: calc(100% - 100px);
                    flex:0 0 auto;
                }

                .ActionButtons{
                    height:100px;
                    width:100%;
                    display:flex;
                    flex:0 0 auto;
                    justify-content:space-between;
                }
            }

            .Form-Illustration{
                display:none;
            }
        }
    }

    ${devices.mobileXL`
        grid-template-rows: 60px 1fr;
        .Logo{
            display:none;
        }
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

                .Form-Illustration{
                    display:block;
                }
            }
        }
    `}

    ${devices.laptop`
        .FormContent{
                .Content{
                display:block;

                .Fields{
                    width:55%;
                }

                .Form-Illustration{
                    display:block;
                }
            }
        }
    `}

`;

export default StyledFormCategory;