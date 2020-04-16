import styled from 'styled-components';


const Info = styled.div`
    width:100%;
    max-width: 300px;
    border-radius:7px;
    box-shadow: 0 8px 16px 0 rgba(3,49,86,0.08);
    margin: 30px;
    flex-shrink:0;

    .Header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 15px 20px;
        border:none;

        .Title{
            display:flex;
            align-items:center;
            color: ${props=>props.theme.dscText};
            span{
                height:10px;
                width:10px;
                border-radius:50%;
                background-color: #fff71a;
            }

            p{
                text-transform: uppercase;
                font-size:14px;
                font-weight:600;
                margin:0;
                margin-left: 10px;
            }
        }
    }

    .Image{
        background: url(${props=>props.img});
        background-size:cover;
        background-repeat:no-repeat;
        background-position:0 -20px;
        height:100px;
        z-index:10;
        width:100%;
    }

    .Content{
        padding: 20px;
        width:100%;
        p{
            font-size: 18px;
            font-weight:bolder;
        };
        
        ul{
            width:100%;
            li{
                display:flex;
                font-weight:200;
                margin: 20px 0;
                justify-content:space-between;

                div{
                    display:flex;
                    align-items:center;
                    p{
                        margin-left:10px;
                    }

                    svg:not(:root).svg-inline--fa{
                        width:15px;
                        flex-shrink:0;
                            font-size:13px;
                            color: ${props=>props.theme.dscText}
                    }
                }

                p{
                    font-size:14px;
                }
            }
        }
    }
`;


export {Info}