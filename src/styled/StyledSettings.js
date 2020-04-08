import styled from 'styled-components';
import { animated } from 'react-spring';

const AStyledSettings = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;

    .Container{
        height:100%;
        width:100%;
        grid-template-rows: 70px 70px 1fr 100px;
        display:grid;

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

        .Content{
            .SettingCategory{
                margin: 40px 0;
                padding: 0 20px;

                .Header{
                    border-bottom: 1px solid #dddfe0;
                    padding-bottom: 7px;
                    display:flex;
                    align-items:center;

                    svg:not(:root).svg-inline--fa{
                        font-size:20px;
                        color: ${props=>props.theme.dscText}
                    }

                    h3{
                        margin-left: 10px;
                        font-weight:900;
                        font-family: 'Poppins', sans-serif;
                    }
                }

                .SettingContents{
                    .Setting{
                        margin: 30px 0;
                        display:flex;
                        justify-content:space-between;
                        
                        .MuiFormControlLabel-root, .Component-root-9{
                            margin:0;
                        }

                        svg:not(:root).svg-inline--fa{
                            font-size:20px;
                            color: ${props=>props.theme.dscText}
                        }

                        p{
                            font-weight:600;
                            color: ${props=>props.theme.dscText}
                        }

                        .Info{
                            padding:3px 7px;
                            min-width:15px;
                            border-radius:7px;
                            flex-shrink:0;
                            font-size:10px;
                            background-color:yellow;
                        }
                    }
                }
            }
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
    }
`;

const StyledSettings = animated(AStyledSettings)
export { StyledSettings as default}