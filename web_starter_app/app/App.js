import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AppNavigator from './AppNavigator';


export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  },
});

