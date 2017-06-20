import React, { PropTypes } from 'react';
import {
  Container,
  Content,
} from 'native-base';

import {
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import strings from '../../config/constants';

import { fetchUsers } from '../../actions/contactActions';
import { openDrawer } from '../../actions/drawerActions';

import Header from '../components/header';
import List from '../components/list';
import Footer from '../components/footer';


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
