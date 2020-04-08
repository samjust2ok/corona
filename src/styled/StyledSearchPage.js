import styled from 'styled-components';

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
            overflow:scroll;
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
                padding: 30px 20px;
                display:flex;
                justify-content:space-between;
                height: 100px;

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
                    justify-content:space-between;
                }
            }
        }
    }
`;

const StyledInput = styled.div`
    position: relative;
    width:100%;
    display:grid;
    grid-template-columns: 1fr 45px;
    grid-column-gap: 10px;

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
`;
export { StyledSearchPage as default, StyledInput};