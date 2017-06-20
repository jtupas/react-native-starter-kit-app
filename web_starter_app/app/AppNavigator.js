import React from 'react';
import {
	View,
	ActivityIndicator,
	AsyncStorage,
	ToolbarAndroid
} from 'react-native';
import {
	Router,
	Scene
} from 'react-native-router-flux';
import Home from './native/containers/home';
import Storage from './native/containers/storage';
import ContactList from './native/containers/contactlist';
import ContactListDetails from './native/containers/contactlistdetails';


//Pages
import Signup from './native/containers/Signup';
import Login from './native/containers/Login';
import Account from './native/containers/Main';
import styles from './assets/styles/mainstyle.js'



export default React.createClass({
	getInitialState() {
		return {
			openingPage: null
		};
	},
	componentWillMount() {
		console.log("will mount")
		//Check if userData is stored on device else open Login
		AsyncStorage.getItem('userData').then((user_data_json) => {
			console.log(user_data);
			let user_data = JSON.parse(user_data_json);
			let openingPage = { openingPage: Login };
			if (user_data != null) {
				this.setState({ openingPage: Account });
			} else {
				this.setState(openingPage);
			}
		});
	},
	render() {
		if (this.state.openingPage) {
			console.log(this.state.openingPage)
			return (
				<Router>
					<Scene key="root">
						<Scene key="home"
							title="My Camera"
							component={this.state.openingPage}
							initial />
						<Scene key="login"
							component={Login} />
						<Scene key="main"
							component={Account} />
						<Scene key="signUp"
							component={Signup} />
						<Scene key="storage"
							title="My Files"
							component={Storage} />
						<Scene key="contactlist"
							component={ContactList}
							hideNavBar />
						<Scene key='details'
							title='Details'
							component={ContactListDetails} />
					</Scene>
				</Router>
			)
		} else {
			console.log("render else")
			return (
				// Our default loading view while waiting to hear back from firebase
				<View style={styles.container}>
					<ToolbarAndroid title="Login" />
					<View style={styles.body}>
						<ActivityIndicator size="large" />
					</View>
				</View>
			);
		}
	}
});