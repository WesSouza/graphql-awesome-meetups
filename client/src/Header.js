import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import HeaderWishlist from './HeaderWishlist';

class Header extends Component {
  render() {
    return (
      <nav className='Header'>
        <h1 className='Header-title'>
          <Link to='/'>
            Awesome Meetup Website
          </Link>
        </h1>
        <HeaderWishlist />
      </nav>
    );
  }
}

export default Header;
