import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import './Meetup.css';

class Meetup extends Component {
  render() {
    const { loading, meetup } = this.props.data;

    if (loading) {
      return <span>Loading...</span>;
    }

    if (!meetup) {
      return null;
    }

    const {
      name,
      description,
      priceFormatted,
      isAvailable
    } = meetup;

    return (
      <div>
        <h1>
          { name }
        </h1>
        <p>
          { description }
        </p>
        <p className='Meetup-price'>
          { priceFormatted }
          { ' ' }
          { !isAvailable &&
            <span className='Meetup-priceSoldOut'>Sold Out</span>
          }
        </p>
      </div>
    );
  }
}

const MeetupQuery = gql`query GetMeetup($id: ID!) {
  meetup(id: $id) {
    id
    name
    description
    priceFormatted
    isAvailable
  }
}`;

const withData = graphql(MeetupQuery, {
  options: (props) => ({
    variables: {
      id: props.match.params.id,
    },
  }),
});

export default withData(Meetup);
