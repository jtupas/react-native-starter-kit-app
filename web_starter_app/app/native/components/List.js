import React, { PropTypes } from 'react';
import {
  List,
  ListItem,
  Text,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';

export default React.createClass({
  propTypes: {
    itemList: PropTypes.Array,
  },

  render() {
    return (
      <List
        dataArray={this.props.itemList}
        renderRow={item =>
          (<ListItem button onPress={() => Actions.details({ user: item })}>
            <Text>{item.first_name}</Text>
          </ListItem>)}
      />
    );
  },
});
