import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import './index.css';

import App from './App';

const client = new ApolloClient({
  addTypename: true,
  networkInterface: createNetworkInterface({ uri: '/graphql' }),
});

render((
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
