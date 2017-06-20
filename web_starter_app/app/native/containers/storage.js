import React from 'react';
import {
	Container,
	Content,
	Text,
	Button,
	List,
	ListItem,
	Left,
	Body,
	Thumbnail
} from 'native-base';
import strings from '../../config/constants';

import RNFS from 'react-native-fs';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/imageActions';
import { openDrawer } from '../../actions/drawerActions';
import Header from '../components/header';
import Footer from '../components/footer';

var Storage = React.createClass({

	componentWillMount() {
		this.props.fetch();
	},

	render() {
		return (
			<Container>
				<Header 
					headerTitle={strings.header_storage}
					leftIcon={strings.icon_menu}
					leftAction={ () => { this.props.openMenu() }} />
				<List 	dataArray={this.props.imageList}
						renderRow={(item) => 
						<ListItem>
                            	<Thumbnail square 
                            		size={80} 
                            		source={{uri: 'file://' + RNFS.DocumentDirectoryPath + '/' + item}} />
                       		<Body>
								<Text>{item}</Text>
							</Body>
						</ListItem> }
					>
				</List>
				<Footer />
			</Container>
		)
	}
});

const mapStateToProps = state => ({
	imageList: state.image.imagePaths
});

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(fetchImages()),
	openMenu: () => dispatch(openDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Storage); 
