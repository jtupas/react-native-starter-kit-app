import React from 'react';
import {
  Container,
} from 'native-base';

import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

const SignUp = React.createClass({
  render() {
    return (
      <Container>
        <Header
          headerTitle="Sign Up"
        />
        <Container style={{ marginTop: 50 }}>
          <SignUpForm />
        </Container>
      </Container>
    );
  },
});

export default SignUp;

