import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  width: {
    minWidth: '320'
  }
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

export function Gender(props)  {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const change = event => {
    setGender(event.target.value);
    props.handleChange(event.target.value)
  };
  return (
    <div className={classes.root}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          onChange={change}
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={props.value1}>{props.value1Text}</MenuItem>
          <MenuItem value={props.value2}>{props.value2Text}</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}

export function Option(props) {
  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">{props.text}</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
     <FormControlLabel
          value={props.value}
          control={<Radio color="secondary" />}
          label={props.label}
          labelPlacement="end"
          required
        />
      </RadioGroup>
    </FormControl>
  )
}

export function Option2(props) {
  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">{props.text}</FormLabel>
      <RadioGroup onChange = {props.handleChange} row aria-label="position" name="position" defaultValue="top">
     <FormControlLabel
          value={props.value}
          control={<Radio color="secondary" />}
          label={props.label}
          labelPlacement="end"
          required
        />
        <FormControlLabel 
          value={props.value_2}
          control={<Radio color="secondary" />}
          label={props.label_2}
          labelPlacement="end"
          required
        />
      </RadioGroup>
    </FormControl>
  )
}

export function Option3(props) {
  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">{props.text}</FormLabel>
      <RadioGroup onChange = {props.handleChange} row aria-label="position" name="position" defaultValue="top">
     <FormControlLabel
          value={props.value}
          control={<Radio color="secondary" />}
          label={props.label}
          labelPlacement="end"
          required
        />
        <FormControlLabel 
          value={props.value_2}
          control={<Radio color="secondary" />}
          label={props.label_2}
          labelPlacement="end"
          required
        />
        <FormControlLabel 
          value={props.value_3}
          control={<Radio color="secondary" />}
          label={props.label_3}
          labelPlacement="end"
          required
        />
      </RadioGroup>
    </FormControl>
  )
}

export function DateTaker(props) {
  return(
     <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={props.label}
          value={props.selectedDate}
          onChange={props.handleDateChange}
          shrink={true}
          required
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  )
}
