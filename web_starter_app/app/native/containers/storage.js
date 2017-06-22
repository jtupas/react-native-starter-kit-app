import React from 'react';
import {
  Container,
  Text,
  List,
  ListItem,
  Body,
  Thumbnail,
} from 'native-base';
import RNFS from 'react-native-fs';
import { connect } from 'react-redux';

import strings from '../../config/constants';
import { fetchImages } from '../../actions/image';
import { openDrawer } from '../../actions/drawer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Storage = React.createClass({

  componentWillMount() {
    this.props.fetch();
  },

  render() {
    return (
      <Container>
        <Header
          headerTitle={strings.header_storage}
          leftIcon={strings.icon_menu}
          leftAction={() => { this.props.openMenu(); }}
        />
        <List
          dataArray={this.props.imageList}
          renderRow={item =>
  (<ListItem>
    <Thumbnail
      square
      size={80}
      source={{ uri: `file://${RNFS.DocumentDirectoryPath}/${item}` }}
    />
    <Body>
      <Text>{item}</Text>
    </Body>
  </ListItem>)}
        />
        <Footer />
      </Container>
    );
  },
});

const mapStateToProps = state => ({
  imageList: state.image.imagePaths,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchImages()),
  openMenu: () => dispatch(openDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
