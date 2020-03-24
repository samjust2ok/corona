import React from 'react'

const btnStyle = {
    background: '#03396c',
    padding: '7px',
    color: '#fff',
    cursor: 'pointer',
    border: '1px solid #03396c',
    // marginLeft: '10px',
    borderRadius: '5px',
}

const Button = (props) =>(
        <>
            <button 
                style={btnStyle}
                type={props.type} 
                name={props.name}
                onClick={props.clicked}>{props.children}</button>
        </>
    
);

export default Button;