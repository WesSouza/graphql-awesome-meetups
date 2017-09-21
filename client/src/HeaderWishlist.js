import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import './HeaderWishlist.css';

class HeaderWishlist extends Component {
  constructor() {
    super();

    this.state = {
      wishlistOpen: false,
    };

    this.handleWishlistOpenClick = this.handleWishlistOpenClick.bind(this);
  }

  render() {
    return (
      <span className='HeaderWishlist' ref={ el => this.wishlistEl = el }>
        <button className='HeaderWishlist-button' onClick={ this.handleWishlistOpenClick }>Wishlist</button>
        { this.renderWishlistContents() }
      </span>
    );
  }

  renderWishlistContents() {
    const {
      wishlistOpen,
    } = this.state;

    const wishlist = {
      meetups: [
        { id: '1', name: 'Fake Meetup 1' },
        { id: '2', name: 'Fake Meetup 2' },
        { id: '3', name: 'Fake Meetup 3' },
      ],
    };

    if (!wishlistOpen || !wishlist) {
      return null;
    }

    return (
      <ul className='HeaderWishlist-list'>
        { wishlist.meetups.map(meetup => (
          <li key={ meetup.id } className='HeaderWishlist-listItem'>
            <Link to={ `/meetup/${meetup.id}` } className='HeaderWishlist-link'>
              { meetup.name }
            </Link>
          </li>
        )) }
      </ul>
    );
  }

  handleWishlistOpenClick() {
    this.wishlistToggle();
  }

  wishlistToggle() {
    this.setState((state) => ({ wishlistOpen: !state.wishlistOpen }));
  }
}

export default HeaderWishlist;
