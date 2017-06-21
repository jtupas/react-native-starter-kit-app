import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Header, Title, Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Button } from 'native-base';
import styles from '../../assets/styles/mainstyle';
import Login from './login';

import { setEmail, setPassword, signup } from '../../actions/signupActions';

const Signup = React.createClass({

  propTypes: {
  signupPageEmail: PropTypes.string,
  signupPagePass: PropTypes.string,
  signupPageLoading: PropTypes.boolean,
  signupPageErrorMsg: PropTypes.string,
  signupPageSuccessMsg: PropTypes.string,
  },

  render() {
    if (this.props.signupPageErrorMsg === null || this.props.signupPageErrorMsg === undefined) {
    } else {
      alert(this.props.signupPageErrorMsg);
    }
    if (this.props.signupPageSuccessMsg === null || this.props.signupPageSuccessMsg === undefined) {
    } else {
      alert(this.props.signupPageSuccessMsg);
    }
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.props.loginPageLoading ? <ActivityIndicator size="large" /> :
    (<Content>
      <List>
        <ListItem>
          <InputGroup>
            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
            <Input
              onChangeText={(text) => { this.props.signupPageSetEmail(text); }}
              value={this.props.singupPageEmail}
              placeholder={'Email Address'}
            />
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup>
            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
            <Input
              onChangeText={(text) => { this.props.signupPageSetPassword(text); }}
              value={this.props.signupPagePass}
              secureTextEntry
              placeholder={'Password'}
            />
          </InputGroup>
        </ListItem>
      </List>
      <Button
        style={styles.primaryButton}
        onPress={() => this.props.signupPageSignup(
          this.props.signupPageEmail,
          this.props.signupPagePass)}
      >
        <Text>
          Signup</Text>
      </Button>
      <Button onPress={this.goToLogin.bind(this)} style={styles.primaryButton}>
        <Text>
          Go to Login</Text>
      </Button>
    </Content>)
      ;
    // A simple UI with a toolbar, and content below it.
    return (
      <Container>
        <Header>
          <Title>Sign Up</Title>
        </Header>
        {content}
      </Container>
    );
  },
  goToLogin() {
    Actions.login();
  },
});

const mapStateToProps = state => ({
  signupPageEmail: state.signup.email,
  signupPagePass: state.signup.password,
  signupPageLoading: state.signup.loading,
  signupPageErrorMsg: state.signup.errorMsg,
  signupPageSuccessMsg: state.signup.successMsg,
});

const mapDispatchToProps = dispatch => ({
  signupPageSetEmail: text => dispatch(setEmail(text)),
  signupPageSetPassword: text => dispatch(setPassword(text)),
  signupPageSignup: (email, password) => dispatch(signup(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
