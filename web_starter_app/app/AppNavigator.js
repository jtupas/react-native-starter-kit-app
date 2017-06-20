import React from 'react';
import {
	Router,
	Scene
} from 'react-native-router-flux';
import {
	Drawer
} from 'native-base';
import { connect } from 'react-redux';

import { closeDrawer } from './actions/drawerActions';

import SideBar from './native/components/sidebar';

import Home from './native/containers/home';
import Storage from './native/containers/storage';
import ContactList from './native/containers/contactlist';
import ContactListDetails from './native/containers/contactlistdetails';

const RouterWithRedux = connect()(Router);

var Navigation = React.createClass({
	closeDrawer() {
		if (this.props.shouldOpen === true) {
			this.drawer._root.close()
		}
		this.props.closeMenu()
	},
	
	openDrawer() {
		this.drawer._root.open()
	},

	componentDidUpdate() {
		if (this.props.shouldOpen === true) {
			this.openDrawer();
		}else {
			this.drawer._root.close()
		}
		console.log(this.props.shouldOpen)
  	},

	render() {
		return (
			<Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigator={this.navigator} />}
              onClose={() => this.closeDrawer()} >
				<RouterWithRedux>
					<Scene key="root">
						<Scene key="camera"
							component={Home}
							hideNavBar
							initial />
						<Scene	key="storage"
								component={Storage}
								hideNavBar />
						<Scene 	key="contactlist"
								component={ContactList}
								hideNavBar />
						<Scene	key='details'
								component={ContactListDetails} />
					</Scene>
				</RouterWithRedux>
			</Drawer>
		)
	}
});
const mapStateToProps = state => ({
	shouldOpen: state.drawer.drawerOpen
});

const mapDispatchToProps = dispatch => ({
	closeMenu: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);