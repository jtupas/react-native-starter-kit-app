import React from 'react';
import {
	Footer,
	FooterTab,
	Button,
	Icon,
} from 'native-base';

import {
	Actions,
	ActionConst,
} from 'react-native-router-flux'; 

export default React.createClass({
	render() {
		return (
			<Footer>
				<FooterTab>
					<Button onPress={() => Actions.camera({type: ActionConst.REPLACE })}>
						<Icon name="ios-image" />
					</Button>
					<Button onPress={() => Actions.storage({type: ActionConst.REPLACE })}>
						<Icon name="ios-folder" />
					</Button>
					<Button onPress={() => Actions.contactlist({type: ActionConst.REPLACE })}>
						<Icon name="ios-contacts" />
					</Button>
				</FooterTab>
			</Footer>
		)
	}
});