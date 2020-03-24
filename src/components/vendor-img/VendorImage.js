import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderAvatar } from './Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const imgStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
//   boxShadow: '5px 5px 9px #aaa, -5px -5px 9px #aaa',
  border: '2px solid #aaa',
  background: 'white',
}
const removeUnderline = {
  textDecoration: 'none',
  color: 'black',
}



export default function VendorImage(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      {
             props.VendorImage ?
             <img src={props.VendorImage} alt={props.vendorAlt} style={imgStyle} title="Click for more options"/> :
             <HeaderAvatar style={imgStyle}/>
           }
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem> <Link to={props.ProfileLink} style={removeUnderline}>Profile</Link> </MenuItem>
        <MenuItem> <Link to={props.ProfileLink} style={removeUnderline}>My account</Link> </MenuItem>
        <MenuItem onClick={props.clicked}> Logout </MenuItem>
      </Menu>
    </div>
  );
}

