import React from 'react';
import {
	Router,
	Scene
} from 'react-native-router-flux';

import Home from './native/containers/home';
import Storage from './native/containers/storage';
import ContactList from './native/containers/contactlist';
import ContactListDetails from './native/containers/contactlistdetails';

export default React.createClass({
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="home"
						   title="My Camera"
						   component={Home}
						   initial />
					<Scene	key="storage"
							title="My Files"
							component={Storage} />
					<Scene 	key="contactlist"
							component={ContactList}
							hideNavBar />
					<Scene	key='details'
							title='Details'
							component={ContactListDetails} />
				</Scene>
			</Router>
		)
	}
});