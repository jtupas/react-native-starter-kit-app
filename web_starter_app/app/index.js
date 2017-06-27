import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';
import AppNavigator from './containers/AppNavigator';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducer, middleware);

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  },
});
