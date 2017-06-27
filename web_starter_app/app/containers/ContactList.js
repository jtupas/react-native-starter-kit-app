import React, { PropTypes } from 'react';
import {
  Container,
  Content,
} from 'native-base';

import {
  Actions,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import strings from '../config/constants';

import { fetchUsers } from '../actions/contact';
import { openDrawer } from '../actions/drawer';

import Header from '../components/Header';
import List from '../components/List';
import Footer from '../components/Footer';


const Main = React.createClass({

  propTypes: {
    load: PropTypes.func,
    fetch: PropTypes.func,
  },

  componentWillMount() {
    this.props.fetch();
  },

  render() {
    return (
      <Container>
        <Header
          headerTitle={strings.header_contacts}
          leftIcon={strings.icon_menu}
          leftAction={() => { this.props.openMenu(); }}
          rightIcon={strings.icon_add}
          rightAction={() => { Actions.details({ user: null }); }}
        />
        <Content>
          <List itemList={this.props.aList} />
        </Content>
        <Footer />
      </Container>
    );
  },
});

const mapStateToProps = state => ({
  aList: state.contact.users,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchUsers()),
  openMenu: () => dispatch(openDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
