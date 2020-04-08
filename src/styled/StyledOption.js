import styled from 'styled-components';

const StyledOption = styled.div`
    display:block;
    margin:10px 0;
    position:relative;

    .Header{
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
        p{
            font-weight:600;
            font-size:14px;
        }

        span{
            background:#d93025;
            padding:3px 7px;
            border-radius:3px;
            font-size:8px;
            color:white;
            flex-grow:0;
            max-height:16px;
        }
    }

    .Options{
        display:flex;
        flex-wrap:wrap;

        .Option{
            display:flex;
            width:fit-content;
            margin: 0px -20px;
            margin-right:10px;
            border-radius: 5px;
            padding: 10px;
            transition:.2s;
            flex-grow:1;

        

            .RadioButton{
                width:50px;
                flex-shrink:0;
            }

            .Description{
                pointer-events:none;
                display:flex;
                flex-direction:column;
                justify-content:center;

                h4{
                    font-size:13px;
                }
                
                p{
                    font-size:12px;
                    margin:5px 0;
                }
            }
        }
    }
    
    .Compliment{
        position:absolute;
        background-color:white;
        border-radius:10px;
        box-shadow:0px 0px 7px rgba(0,0,0,.2);
        top:calc(50% + 10px);
        padding:10px 20px 10px 30px;
        z-index:100;
    }
`;


export default StyledOption;