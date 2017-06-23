import React from 'react';
import {
  Container,
} from 'native-base';
import { connect } from 'react-redux';

import strings from '../../config/constants';

import { openDrawer } from '../../actions/drawer';

import Camera from '../components/Camera';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(openDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(myCamera);
