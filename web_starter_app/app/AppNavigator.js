import React from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import {
  Drawer,
} from 'native-base';
import { connect } from 'react-redux';

import { closeDrawer } from './actions/drawer';

import SideBar from './native/components/SideBar';

import Home from './native/containers/Home';
import Storage from './native/containers/Storage';
import ContactList from './native/containers/ContactList';
import ContactListDetails from './native/containers/ContactListDetails';
import Login from './native/containers/Login';
import SignUp from './native/containers/SignUp';
import Main from './native/containers/Main';

const RouterWithRedux = connect()(Router);

const Navigation = React.createClass({
  closeDrawer() {
    if (this.props.shouldOpen === true) {
      this.drawer._root.close();
    }
    this.props.closeMenu();
  },

  openDrawer() {
    this.drawer._root.open();
  },

  componentDidUpdate() {
    if (this.props.shouldOpen === true) {
      this.openDrawer();
    } else {
      this.drawer._root.close();
    }
    console.log(this.props.shouldOpen);
  },

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="camera"
              component={Home}
              hideNavBar
              initial
            />
            <Scene
              key="storage"
              component={Storage}
              hideNavBar
            />
            <Scene
              key="contactlist"
              component={ContactList}
              hideNavBar
            />
            <Scene
              key="details"
              component={ContactListDetails}
            />
            <Scene
              key="login"
              component={Login}
            />
            <Scene
              key="main"
              component={Main}
            />
            <Scene
              key="signup"
              component={SignUp}
            />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  },
});
const mapStateToProps = state => ({
  shouldOpen: state.drawer.drawerOpen,
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
