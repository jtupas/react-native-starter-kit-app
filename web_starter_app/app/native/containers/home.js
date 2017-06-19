import React from 'react';
import {
	Container,
	Content,
	Text,
	Header,
} from 'native-base';

import Camera from '../components/camera';  
import Footer from '../components/footer';
import Styles from '../../assets/style';

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