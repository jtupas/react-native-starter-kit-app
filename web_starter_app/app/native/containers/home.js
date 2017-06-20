import React from 'react';
import {
  Container,
} from 'native-base';
import { connect } from 'react-redux';

import strings from '../../config/constants';

import { openDrawer } from '../../actions/drawerActions';

import Camera from '../components/camera';
import Header from '../components/header';
import Footer from '../components/footer';

const myCamera = React.createClass({
  render() {
    return (
      <Container>
        <Header
          headerTitle={strings.header_camera}
          leftIcon={strings.icon_menu}
          leftAction={() => { this.props.openMenu(); }}
        />
        <Camera />
        <Footer />
      </Container>
    );
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(openDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(myCamera);
