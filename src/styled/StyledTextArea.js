import styled from 'styled-components';

const StyledTextArea  =  styled.div`
    width:100%;

    .Header{
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;

        p{
            font-weight:600;
            font-size:14px;
        }

        .Counter{
            flex-shrink:0;
            span{
                font-size:12px;
                padding:3px 5px;
                background-color:#f50057;
                border-radius:2px;
                color:white;
            }
        }
    }

    .TextBox{
        width:100%;
        position: 100%;
        
        textarea{
            width:100%;
            height:170px;
            font-size:14px;
            font-family:  'Montserrat', sans-serif;
            padding:10px;
            border: 1px solid #dadce0;
            border-radius:5px;
            line-height:20px;
        }

        textarea[haserror = true]{
            border: 2px solid ${props=>props.theme.dscWine}
        }
    }

    .InfoField{
            font-size:12px;
            margin-top:10px;
            
            .Error{
                color:#d93025;

                span{
                    margin-right:7px;
                }
            }
    }
`;

export default StyledTextArea;