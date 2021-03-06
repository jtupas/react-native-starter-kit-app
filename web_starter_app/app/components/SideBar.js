import React from 'react';
import {
  AsyncStorage,
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Header,
  Button,
} from 'native-base';
import {
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import strings from '../config/constants';
import { closeDrawer } from '../actions/drawer';
import { signOut } from '../actions/account';

const sideBar = React.createClass({
  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header />
        <Content style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
          <List>
            <ListItem
              button
              onPress={() => {
                Actions.camera({ type: ActionConst.REPLACE });
                this.props.closeMenu();
              }}
            >
              <Text>{strings.HEADER_CAMERA}</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                Actions.storage({ type: ActionConst.REPLACE });
                this.props.closeMenu();
              }}
            >
              <Text>{strings.HEADER_STORAGE}</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                Actions.contactlist({ type: ActionConst.REPLACE });
                this.props.closeMenu();
              }}
            >
              <Text>{strings.HEADER_CONTACT}</Text>
            </ListItem>
          </List>
        </Content>
        <Button
          transparent
          onPress={() => { this.logOut(); }}
        >
          <Text>Sign Out</Text>
        </Button>
      </Container>
    );
  },
  logOut() {
    this.props.closeMenu();
    AsyncStorage.removeItem('userData')
      .then(() => {
        this.props.signOut();
      })
      .catch(() => {
      });
  },
});

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeDrawer()),
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(sideBar);
