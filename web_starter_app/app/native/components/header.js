import React, { PropTypes } from 'react'
import {
	Header,
	Left,
	Right,
	Body,
	Title,
	Button,
	Text,
} from 'native-base';

export default React.createClass({
	propTypes: {
		headerTitle: PropTypes.string.isRequired,
		leftTitle: PropTypes.string,
		rightTitle: PropTypes.string,
		leftAction: PropTypes.func,
		rightAction: PropTypes.func,
	},

	render() {
		return (
			<Header>
				<Left>
					<Button transparent onPress={this.props.leftAction}>
						<Text>{this.props.leftTitle}</Text>
					</Button>
				</Left>
				<Body>
					<Title>{this.props.headerTitle}</Title>
				</Body>
				<Right>
					<Button transparent onPress={this.props.rightAction}>
						<Text>{this.props.rightTitle}</Text>
					</Button>
				</Right>
			</Header>)
	}
});