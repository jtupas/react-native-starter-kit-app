import React from 'react';
import {
	Container,
	Content,
	Text,
	Header,
} from 'native-base';

import Camera from './camera';  
import Footer from './footer';
import Styles from '../resources/style';
import Drawer from './sidedrawer';

export default React.createClass({
	render() {
		return (
			<Container>
				<Header />
				<Camera />
				<Footer />
			</Container>
		)
	}
});