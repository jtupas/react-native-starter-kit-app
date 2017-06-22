import React from 'react';
import {
  Container,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

const SignUp = React.createClass({
  render() {
    return (
      <Container>
        <Header
          headerTitle="New User"
          leftTitle="Back"
          leftIcon="ios-arrow-back"
          leftAction={() => {
            Actions.pop();
          }}
        />
        <Container style={{ marginTop: 50 }}>
          <SignUpForm />
        </Container>
      </Container>
    );
  },
});

export default SignUp;

