import React from 'react';
import {
  AsyncStorage,
} from 'react-native';
import {
  Container,
  Spinner,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const Login = React.createClass({
  renderAlert() {
    if (this.props.signupPageSuccessMsg) {
      Actions.pop();
      alert(this.props.signupPageSuccessMsg);
    }
    if (this.props.signupPageErrorMsg) {
      alert(this.props.signupPageErrorMsg);
    }
    if (this.props.loginPageErrorMsg) {
      alert(this.props.loginPageErrorMsg);
    }
  },
  saveUserData() {
    if (this.props.loginPageUserData) {
      AsyncStorage.setItem('userData', JSON.stringify(this.props.loginPageUserData));
    }
  },
  renderLoginForm() {
    return (
      <Container style={{ marginTop: 50 }}>
        <LoginForm />
      </Container>
    );
  },
  render() {
    this.saveUserData();
    this.renderAlert();
    return this.renderLoginForm();
  },
});

const mapStateToProps = state => ({
  loginPageUserData: state.account.userData,
  signupPageErrorMsg: state.signup.errorMsg,
  signupPageSuccessMsg: state.signup.successMsg,
  loginPageErrorMsg: state.account.errorMsg,
});

export default connect(mapStateToProps)(Login);

