import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <header className='navbar'>
          <a className='logo' aria-current='page' href='/'>
            COVID-19 Tracker
          </a>
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
                <Link activeStyle={{ color: 'purple' }} to={ROUTES.REPORT}>
                  Report
                </Link>
              </li>
              <p className='navbar-right-icon'>Hamburger</p>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
