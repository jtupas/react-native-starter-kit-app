'use strict';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';
import { Header, Title, Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import styles from '../../assets/styles/mainstyle.js';
import React, { Component } from 'react';
import Login from './Login';

import { connect } from 'react-redux';
import { setEmail, setPassword, setLoading, signup } from '../../actions/signupActions'

var Signup = class Signup extends Component {

  render() {
    if (this.props.signupPageErrorMsg === null || this.props.signupPageErrorMsg === undefined) { 
    } else {
      alert(this.props.signupPageErrorMsg);
    }
    if (this.props.signupPageSuccessMsg === null || this.props.signupPageSuccessMsg === undefined) { 
    } else {
      alert(this.props.signupPageSuccessMsg)
    }
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.props.loginPageLoading ? <ActivityIndicator size="large" /> :
      <Content>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => {this.props.signupPageSetEmail(text)}}
                value={this.props.singupPageEmail}
                placeholder={"Email Address"} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => {this.props.signupPageSetPassword(text)}}
                value={this.props.signupPagePass}
                secureTextEntry={true}
                placeholder={"Password"} />
            </InputGroup>
          </ListItem>
        </List>
        <Button style={styles.primaryButton} onPress={() => this.props.signupPageSignup(
          this.props.signupPageEmail, 
          this.props.signupPagePass)}>
          <Text>
          Signup</Text>
              </Button>
        <Button onPress={this.goToLogin.bind(this)} style={styles.primaryButton}>
          <Text>
          Go to Login</Text>
              </Button>
      </Content>
      ;
    // A simple UI with a toolbar, and content below it.
    return (
      <Container>
        <Header>
          <Title>Sign Up</Title>
        </Header>
        {content}
      </Container>
    )
  }
  goToLogin() {
    Actions.login();
  }
}

const mapStateToProps = state => ({
  signupPageEmail: state.signup.email,
  signupPagePass: state.signup.password,
  signupPageLoading: state.signup.loading,
  signupPageErrorMsg: state.signup.errorMsg,
  signupPageSuccessMsg: state.signup.successMsg
});

const mapDispatchToProps = dispatch => ({
  signupPageSetEmail: (text) => dispatch(setEmail(text)),
  signupPageSetPassword: (text) => dispatch(setPassword(text)),
  signupPageSignup: (email, password) => dispatch(signup(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 