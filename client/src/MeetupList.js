import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class MeetupList extends Component {
  render() {
    const { loading, meetups } = this.props.data;

    if (loading) {
      return <span>Loading...</span>;
    }

    if (!meetups) {
      return null;
    }

    return (
      <div>
        <h1>Meetups</h1>

        <ul>
          { meetups.map(meetup => (
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

const MeetupListQuery = gql`{
  meetups {
    id
    name
    priceFormatted
  }
}`;

const withData = graphql(MeetupListQuery);

export default withData(MeetupList);
