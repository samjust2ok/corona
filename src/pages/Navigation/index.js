import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../../icons/world.svg'
import app from '../../base';
import { useAuthContext } from '../../auth/Auth';
import * as ROUTES from '../../constants/routes';
import './styles.css';

export default function Header() {
  const { currentUser } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Navmenu = {
    background: '#f50057',
    width: '100%',
    height: '40px',
    color: '#fff',
    marginTop: '-9px',
  }
  const NavColor = {
    color: '#000'
  }
    return (
      <div className='navbar-container'>
        <header className='navbar'>
        <p className='navbar-right-icon' >
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary" variant="contained" style={{ marginTop: '-12px' }}> 
        <MenuIcon />
        </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem style={Navmenu} onClick={handleClose}>MENU</MenuItem>
        <MenuItem onClick={handleClose}><Link to="/tips" style={NavColor}> Health Tips </Link></MenuItem>
        {
          currentUser ? 
          <MenuItem onClick={ () => app.auth().signOut() } ><Link to="#" style={NavColor}>Logout</Link></MenuItem>
          :
          <MenuItem onClick={handleClose} ><Link to="/login" style={NavColor}>Login</Link></MenuItem>
        }
        </Menu>
          </p>
          <Link className='logo' aria-current='page' to='/'>
           <img src={Logo} alt="Logo"/> COVID-19 Tracker
          </Link>
          <nav className='navbar-right'>
            <ul className='navbar-right-content'>
              {/* <li className='navbar-right-item'>
                <Link activestyle={{ color: 'purple' }} to={ROUTES.DASHBOARD}>
                  Dashboard
                </Link>
              </li> */}
              <li className='navbar-right-item'>
                {
                  currentUser ? 
                  <Link activestyle={{ color: 'purple' }} onClick={ () => app.auth().signOut() }>
                  Sign out
                </Link> :
                  <Link activestyle={{ color: 'purple' }} to={ROUTES.SIGNUP}>
                  Sign up
                </Link>
                }
                
              </li>
              <li className='navbar-right-item'>
                <Link activestyle={{ color: 'purple' }} to={ROUTES.TIPS}>
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

