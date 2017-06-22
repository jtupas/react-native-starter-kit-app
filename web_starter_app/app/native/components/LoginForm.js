import React from 'react';
import {
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import {
  Actions
} from 'react-native-router-flux';
import strings from '../../config/constants';
import {
  setEmail,
  setPassword,
  login,
} from '../../actions/account';

const LoginForm = React.createClass({
  renderAlert() {
    if (this.props.signupPageSuccessMsg) {
      Actions.pop();
      alert(this.props.signupPageSuccessMsg);
    } else if (this.props.signupPageErrorMsg) {
      alert(this.props.signupPageErrorMsg);
    }
  },
  render() {
    return (
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              onChangeText={(text) => { this.props.loginPageSetEmail(text); }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              onChangeText={(text) => { this.props.loginPageSetPassword(text); }}
            />
          </Item>
        </Form>
        <Button
          style={{ margin: 10 }}
          block
          onPress={() => {
            this.props.loginPageLogin(this.props.loginPageEmail, this.props.loginPagePass);
          }}
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={{ marginTop: 10 }}
          block
          transparent
          onPress={() => Actions.signup()}
        >
          <Text>New User?</Text>
        </Button>
      </Content>
    );
  },
});

const mapStateToProps = state => ({
  loginPageEmail: state.account.email,
  loginPagePass: state.account.password,
  loginPageUserData: state.account.userData,
});

const mapDispatchToProps = dispatch => ({
  loginPageSetEmail: text => dispatch(setEmail(text)),
  loginPageSetPassword: text => dispatch(setPassword(text)),
  loginPageLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
