import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import MeetupList from './MeetupList';
import Meetup from './Meetup';
import Wishlist from './Wishlist';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='App-content'>
          <Route path='/' exact component={ MeetupList } />
          <Route path='/meetup/:id' exact component={ Meetup } />
          <Route path='/wishlist' exact component={ Wishlist } />
        </main>
      </div>
    );
  }
}

export default App;
