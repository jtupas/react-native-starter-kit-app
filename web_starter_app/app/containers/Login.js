import React from 'react';
import {
  Image,
} from 'react-native';
import {
  Container,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const imageLogo = require('../assets/images/logo_react.png');

const Login = React.createClass({
  renderAlert() {
    if (this.props.signupPageSuccessMsg) {
      Actions.pop();
      /* eslint-disable */
      alert(this.props.signupPageSuccessMsg);
    }
    if (this.props.signupPageErrorMsg) {
      alert(this.props.signupPageErrorMsg);
    }
    if (this.props.loginPageErrorMsg) {
      alert(this.props.loginPageErrorMsg);
      /* eslint-enable */
    }
  },
  renderLoginForm() {
    return (
      <Container>
        <Container style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 250, height: 250 }}
            source={imageLogo}
          />
        </Container>
        <Container>
          <LoginForm />
        </Container>
      </Container>
    );
  },
  render() {
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

