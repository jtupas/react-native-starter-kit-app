'use strict';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';
import { Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Signup from './Signup';
import Account from './Main'
import styles from '../../assets/styles/mainstyle.js';

import { setEmail, setPassword, setLoading, login } from '../../actions/loginActions'

import firebaseApp from '../../config/firebase'

var Login = class Login extends Component {

  saveUserData() {
    console.log("save");
    if (this.props.loginPageUserData === null) {
      console.log("save if");
    } else {
      console.log("save else");
      AsyncStorage.setItem('userData', JSON.stringify(this.props.loginPageUserData));
      Actions.main({type: ActionConst.REPLACE })
    }
  }

  render() {
    console.log("login")
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    console.log("Loading " +  this.props.loginPageLoading);
    const content = this.props.loginPageLoading ?
      <View style={styles.body}>
        <ActivityIndicator size="large" />
      </View> :
      <Content>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => {this.props.loginPageSetEmail(text)}}
                value={this.props.loginPageEmail}
                placeholder={"Email Address"} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => {this.props.loginPageSetPassword(text)}}
                value={this.props.loginPagePass}
                secureTextEntry={true}
                placeholder={"Password"} />
            </InputGroup>
          </ListItem>
        </List>
        <Button style={styles.primaryButton} onPress={() =>{this.props.loginPageLogin(this.props.loginPageEmail, 
            this.props.loginPagePass)}}>
          <Text>
          Login
          </Text>
                  </Button>
        <Button style={styles.primaryButton} onPress={this.goToSignup.bind(this)} >
          <Text>Sign up</Text>
                  </Button>
      </Content>
      ;
    // A simple UI with a toolbar, and content below it.
    return (
      <Container>
        <Header>
          <Title>Login</Title>
        </Header>
        {content}
        {this.saveUserData()}
      </Container>
    );
  }
  
  // Go to the signup page
  goToSignup() {
    Actions.signUp();
  }
}

const mapStateToProps = state => ({
  loginPageEmail: state.login.email,
  loginPagePass: state.login.password,
  loginPageLoading: state.login.loading,
  loginPageErrorMsg: state.login.errorMsg,
  loginPageUserData: state.login.userData
});

const mapDispatchToProps = dispatch => ({
  loginPageSetEmail: (text) => dispatch(setEmail(text)),
  loginPageSetPassword: (text) => dispatch(setPassword(text)),
  loginPageSetLoading: (boolean) => dispatch(setLoading(boolean)),
  loginPageLogin: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login); 