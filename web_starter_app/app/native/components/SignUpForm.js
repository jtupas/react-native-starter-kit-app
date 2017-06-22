import React from 'react';
import {
  Form,
  Input,
  Item,
  Content,
  Button,
  Text,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  setEmail,
  setPassword,
  signup,
} from '../../actions/sign-up';

const SignUpForm = React.createClass({
  render() {
    this.renderAlert();
    return (
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              onChangeText={(text) => { this.props.signupPageSetEmail(text); }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              onChangeText={(text) => { this.props.signupPageSetPassword(text); }}
            />
          </Item>
        </Form>
        <Button
          style={{ margin: 10 }}
          block
          onPress={() => {
            this.props.signupPageSignup(this.props.signupPageEmail, this.props.signupPagePass);
          }}
        >
          <Text>Sign Up</Text>
        </Button>
        <Button
          style={{ marginTop: 10 }}
          block
          transparent
          onPress={() => Actions.pop()}
        >
          <Text>Return to Log In</Text>
        </Button>
      </Content>
    );
  },
});

const mapStateToProps = state => ({
  signupPageEmail: state.signup.email,
  signupPagePass: state.signup.password,
});

const mapDispatchToProps = dispatch => ({
  signupPageSetEmail: text => dispatch(setEmail(text)),
  signupPageSetPassword: text => dispatch(setPassword(text)),
  signupPageSignup: (email, password) => dispatch(signup(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
