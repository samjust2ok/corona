import React from 'react';
// import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Button.module.scss'


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
const btnStyle = {
    background: '#03396c',
    padding: '7px',
    color: '#fff',
    cursor: 'pointer',
    border: '1px solid #03396c',
    // marginLeft: '10px',
    borderRadius: '5px',
}

export function Btn(props) {
    return(
        <>
            <Button
            variant="contained" 
            color={props.color}
            type={props.type} 
            name={props.name}
            onClick={props.clicked}
            > 
            { props.children } 
            </Button>
        </>
    )
}



