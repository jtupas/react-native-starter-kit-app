import React, { PropTypes } from 'react'
import {
	Header,
	Left,
	Right,
	Body,
	Title,
	Button,
	Text,
	Icon,
} from 'native-base';

export default React.createClass({
	propTypes: {
		headerTitle: PropTypes.string.isRequired,
		leftTitle: PropTypes.string,
		leftIcon: PropTypes.string,
		rightTitle: PropTypes.string,
		rightIcon: PropTypes.string,
		leftAction: PropTypes.func,
		rightAction: PropTypes.func,
	},

	renderLeftIcon() {
		if (this.props.leftIcon === '' || this.props.leftIcon === undefined) {
			return null;
		}
		return <Icon name={this.props.leftIcon} />
		
	},

	renderRightIcon() {
		if (this.props.rightIcon === '' || this.props.rightIcon === undefined) {
			return null;
		}
		return <Icon name={this.props.rightIcon} />
		
	},

	render() {
		return (
			<Header>
				<Left>
					<Button transparent onPress={this.props.leftAction}>
						{this.renderLeftIcon()}
						<Text>{this.props.leftTitle}</Text>
					</Button>
				</Left>
				<Body>
					<Title>{this.props.headerTitle}</Title>
				</Body>
				<Right>
					<Button transparent onPress={this.props.rightAction}>
						<Text>{this.props.rightTitle}</Text>
						{this.renderRightIcon()}
					</Button>
				</Right>
			</Header>)
	}
});