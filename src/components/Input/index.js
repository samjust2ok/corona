import React, { useState } from 'react';
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
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import { theme } from '../../constants/theme';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 35,
    height: 20,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: 'rgb(84,163,255)',
      '& + $track': {
        backgroundColor: 'rgba(0,0,0,.05)',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 17,
    height: 17,
  },
  track: {
    borderRadius: 20 / 2,
    border: `none`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


export function CustomizedSwitch({handleChange,value = true}) {
  const [state, setState] = React.useState({
    checkedB: value,
  });

  const handleChangeChecked = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    handleChange && handleChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={state.checkedB} onChange={handleChangeChecked} name="checkedB" />}
      />
    </FormGroup>
  );
}








const themeC = createMuiTheme({
  spacing: 7,
  palette:{
    primary: {
      main: '#1976d2'
    },
    secondary:{
      main: '#9a0036'
    }
  },
  typography:{
    htmlFontSize: 16,
    fontFamily:[
      'Montserrat', 
      'sans-serif'
    ]
  }
});



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

export function CustomDatePicker({handleChange,label,preValue}) {
  const [selectedDate, handleDateChange] = useState(preValue);

  const dateHandler = (date)=>{
    handleDateChange(date)
    handleChange && handleChange(date)
  }

  return(
     <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme = {themeC}>
          <KeyboardDatePicker
            disableToolbar
            clearable
            variant="inline"
            format="MM/DD/YYYY"
            margin="normal"
            id="date-picker-inline"
            label={label}
            value={selectedDate}
            onChange={dateHandler}
            maxDate = {new Date()}
            required
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}
