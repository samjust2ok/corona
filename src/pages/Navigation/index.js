import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../../icons/world.svg'
import * as ROUTES from '../../constants/routes';
import './styles.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
      <div className='navbar-container'>
        <header className='navbar'>
        <p className='navbar-right-icon' >
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary" variant="contained"> 
        <MenuIcon />
        </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
          </p>
          <Link className='logo' aria-current='page' to='/'>
           <img src={Logo} alt="Logo"/> COVID-19 Tracker
          </Link>
          <nav className='navbar-right'>
            <ul className='navbar-right-content'>
              <li className='navbar-right-item'>
                <Link activeStyle={{ color: 'purple' }} to={ROUTES.DASHBOARD}>
                  Dashboard
                </Link>
              </li>
              <li className='navbar-right-item'>
                <Link activeStyle={{ color: 'purple' }} to={ROUTES.TIPS}>
                  Tips
                </Link>
              </li>
              <li className='navbar-right-item'>
                <Button variant="contained" color="secondary" component={Link} to={ROUTES.REPORT}> Report </Button>
              </li>
              <p className='navbar-right-icon'><Button variant="contained" color="secondary" component={Link}to={ROUTES.REPORT}> Report </Button></p>
            </ul>
          </nav>
        </header>
      </div>
    );
  }

