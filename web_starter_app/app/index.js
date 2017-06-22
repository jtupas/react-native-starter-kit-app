import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import AppNavigator from './native/containers/AppNavigator';


const middleware = applyMiddleware(thunk);

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
