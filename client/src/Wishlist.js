import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class Wishlist extends Component {
  render() {
    const { loading, wishlist } = this.props.data;

    if (loading) {
      return <span>Loading...</span>;
    }

    if (!wishlist) {
      return null;
    }

    return (
      <div>
        <h1>Wishlist</h1>

        <ul>
          { wishlist.meetups.map(meetup => (
            <li key={ meetup.id }>
              <Link to={ `/meetup/${meetup.id}` }>
                { meetup.name } ({ meetup.priceFormatted })
              </Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

const WishlistQuery = gql`{
  wishlist {
    meetups {
      id
      name
      priceFormatted
      isAvailable
    }
  }
}`;

const withData = graphql(WishlistQuery);

export default withData(Wishlist);
