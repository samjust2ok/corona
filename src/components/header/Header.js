import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import './Header.module.scss';
import service from "../../icons/world.svg";
import list from "../../icons/list.svg";
import search from "../../icons/search.svg";


// Material UI component
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Info from '@material-ui/icons/Info';
import Lock from '@material-ui/icons/Lock';
import HowToReg from '@material-ui/icons/HowToReg';
import NaturePeople from '@material-ui/icons/NaturePeople';
import DashboardIcon from '@material-ui/icons/DashboardRounded'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'

// core components
import styles from './headerStyle';

// User Authentication Import
import app from '../../base';
import { useAuthContext } from '../../auth/Auth';

// Vendor image that shows when the user is logged in
import VendorImage from '../../components/vendor-img/VendorImage';
import NavImageList from '../../components/nav-image-list/NavImageList';
import NavListItem from '../../components/nav-list-item/NavListItem'

const useStyles = makeStyles(styles);
const bg = {
    backgroundColor: '#011f4b',
}
export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  const [SearchClick, setSearchClick] = useState(false);
  const handleSearchClick = () => {
    setTimeout(() => setSearchClick(true), 650);
  }
  const removeSearchClick = () => {
    setTimeout(() => setSearchClick(false), 650);
  }
  const { currentUser } = useAuthContext();
  return (
    <div className="HeaderClass">
    <header role="header">
      {
        currentUser ? 
        <nav role="navigation links">
        <div className="logo"> <Link to="/"> <img src={service} alt="service-mart-logo"/> </Link></div>
          <ul className="links" role="links">
          <li> <Link to="/about-us"> About </Link> </li>
          <li> <Link to="/jobs"> Jobs </Link> </li>
        </ul>
        
        <div className="button-nav">
          <Button className="btn" variant="contained" color="primary" component={Link} to="post-a-job"> Post a Job </Button> 
        </div>

        <div className="vendor__image">
        <VendorImage 
               VendorImage={currentUser.photoURL}
               ProfileLink={`dashboard/profile`}
               AccountLink={"/dashboard"}
               clicked={() => app.auth().signOut()}
               className="vendor__image"
               />  
        </div>
        
              
        <div className="nav__icon__display">
        <img src={search} alt="navigation-menu" className="search__display"/>
        <img 
        src={list} 
        alt="search-vendors" 
        className="menu__display"
        onClick={handleDrawerToggle}
        />
        </div>
      </nav>

      : // If the user is not logged in

      <nav role="navigation links">
        <div className="logo"> <Link to="/"> <img src={service} alt="service-mart-logo"/> </Link></div>
          <ul className="links" role="links">
          <li> <Link to="/about-us"> About </Link> </li>
          <li> <Link to="/jobs"> Jobs </Link> </li>
          <li> <Link to="/login"> Login </Link> </li>
          <li> <Link to="/register"> Register </Link> </li>
          <li>  
           </li>
        </ul>
        
        <div className="button-nav">
          <Button className="btn" variant="contained" color="primary" component={Link} to="/post-a-job"> Post a Job </Button> 
        </div>
              
        <div className="nav__icon__display">
        {
          SearchClick ? 
          <CloseIcon className="search__display" onClick={removeSearchClick}/> :
          <img src={search} alt="navigation-menu" className="search__display" onClick={handleSearchClick}/> 
        }
        <img 
        src={list} 
        alt="search-vendors" 
        className="menu__display"
        onClick={handleDrawerToggle}
        />
        </div>
      </nav>
      }
    </header>
    
    <header className="search__display" style={SearchClick ? null : { display: 'none' }}>
      <form>
      <input 
      placeholder="e.g Tailor"
      type="text"
      required
      />
      <Button variant="contained" color="primary"> <SearchIcon /> </Button>
      </form>
    </header>

    <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          
          <div className="hidden-drawer">
          <AppBar position="static">
          <Toolbar variant="dense" style={bg}>
            <IconButton edge="start"color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <ArrowBackIcon 
              />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              MENU
            </Typography>
          </Toolbar>
        </AppBar>  
          <div>
              
            </div>
            {
              currentUser ? 
              <div className="nav-image-list">
              <NavImageList 
              vendorName={currentUser.displayName}
              // vendorEmail={currentUser.email}
              vendorImage={currentUser.photoURL}
              /> 
              <NavListItem 
              text="My profile"
              link="/dashboard/profile"
              icon={<AccountCircleIcon />}
              />
              <NavListItem 
              text="Dahboard"
              link="/dashboard"
              icon={<DashboardIcon />}
              />
               <NavListItem 
              text="Logout"
              link="/#"
              clicked={ () => app.auth().signOut() }
              icon={<ExitToAppIcon />}
              />
              <Divider/>
              <NavListItem 
              text="About"
              link="/about"
              icon={<Info />}
              />

              <NavListItem 
              text="Jobs"
              link="/post-a-job"
              icon={<NaturePeople />}
              />
              <Button component={Link} to="/post-a-job" variant="contained" color="primary"> Post a Job </Button>
              </div>
              :
              // The links to display if the user is not logged in
              <div className="nav-image-list">
              <NavListItem 
              text="About"
              link="/about"
              icon={<Info />}
              /> 

              <NavListItem 
              text="Jobs"
              link="/post-a-job"
              icon={<NaturePeople />}
              />

              <NavListItem 
              text="sign in"
              link="/login"
              icon={<Lock />}
              />

              <NavListItem 
              text="sign up"
              link="/register"
              icon={<HowToReg />}
              />

              <Button component={Link} to="/post-a-job" variant="contained" color="primary"> Post a Job </Button>
              </div>
            }
          </div>
        </Drawer>
      </Hidden>
    </div>
  )
}

