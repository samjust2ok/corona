import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function Input(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField 
      id={props.id} 
      label={props.label}
      name={props.name}
      variant="outlined" 
      size="medium"
      defaultValue={props.value}
      onChange={props.handleChange}
      type={props.type}
      placeholder={props.placeholder}
      required
      />
    </div>
  );
}
