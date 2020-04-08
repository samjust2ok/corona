import styled from 'styled-components';


const StyledButton = styled.button`
    border-radius: 3px;
    border:none;
    padding:10px 20px;
    max-height:40px;
    color:${props=>props.type === 'primary'?'white':'#1a73e8'};
    background-color:${props=>props.type === 'primary' ? '#1a73e8' : 'white'};
    font-weight:600;
    margin-left:${props=>props.type === 'primary'? '':'-20px'};
    transition:.2s;
    width:auto;

    span{
        margin:${props=>props.iconPos === 'left' ? '0px 5px 0px 0px':'0px 0px 0px 5px'};
    }

    :hover{
        background-color:${props=>props.type === 'primary'?'':'rgb(246, 250, 254)'};
        
    }
`;

export default StyledButton;