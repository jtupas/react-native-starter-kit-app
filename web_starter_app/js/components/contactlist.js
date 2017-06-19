import React, { PropTypes } from 'react';
import {
	Container,
	Content,
	Text,
} from 'native-base';

import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/contactActions';

import Header from '../components/header';
import List from '../components/list';
import Footer from '../components/footer';


var Main = React.createClass({

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
					headerTitle='Main' 
					leftTitle='' 
					rightTitle='Add' 
					rightAction={ () => {Actions.details({user: null})}} />
				<Content>
					<List itemList={this.props.aList} />
				</Content>
				<Footer />
			</Container>
		)
	}
}); 

const mapStateToProps = state => ({
	aList: state.contact.users
});

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main); 