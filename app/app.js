import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import client from './client';
import routes from './routes';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <div>
      <Router history={browserHistory} routes={routes}/>
    </div>
  </ApolloProvider>
  , document.querySelector('#root'));
