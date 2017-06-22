import React from 'react';
import {
  AsyncStorage,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import {
  Container,
  Drawer,
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';

import SideBar from '../components/SideBar';

import Home from '../containers/Home';
import Storage from '../containers/Storage';
import ContactList from '../containers/ContactList';
import ContactListDetails from '../containers/ContactListDetails';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';

import { setDrawerPage, setLoginPage } from '../../actions/navigation';

const RouterWithRedux = connect()(Router);

const Navigation = React.createClass({
  closeDrawer() {
    if (this.props.shouldOpen === true && typeof this.drawer !== 'undefined') {
      this.drawer._root.close();
    }
    this.props.closeMenu();
  },

  openDrawer() {
    if (typeof this.drawer !== 'undefined') {
      this.drawer._root.open();
    }
  },

  componentWillMount() {
    AsyncStorage.getItem('userData')
    .then((userDataJson) => {
      if (userDataJson) {
        this.props.setNavigationRouter();
      } else {
        this.props.setLogin();
      }
    });
  },

  componentDidUpdate() {
    if (this.props.shouldOpen === true) {
      this.openDrawer();
    } else if (this.drawer !== null && typeof this.drawer !== 'undefined') {
      this.drawer._root.close();
    }
  },

  renderDrawer() {
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
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  },

  renderLogin() {
    return (
      // <Login />
      <RouterWithRedux>
        <Scene key="auth">
          <Scene
            key="login"
            component={Login}
            initial
            hideNavBar
          />
          <Scene
            key="signup"
            component={SignUp}
            hideNavBar
          />
        </Scene>
      </RouterWithRedux>
    );
  },

  renderSpinner() {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  },

  render() {
    if (this.props.currentPage === 'Router') {
      return this.renderDrawer();
    } else if (this.props.currentPage === 'Login') {
      return this.renderLogin();
    }
    return this.renderSpinner();
  },
});
const mapStateToProps = state => ({
  shouldOpen: state.drawer.drawerOpen,
  currentPage: state.navigation.page,
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeDrawer()),
  setNavigationRouter: () => dispatch(setDrawerPage()),
  setLogin: () => dispatch(setLoginPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
