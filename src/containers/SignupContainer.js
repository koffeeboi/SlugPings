import React from 'react';
import { connect } from 'react-redux';

import Signup from '../components/Signup';
import { showSignup, hideSignup } from "../actions/SignupActions";

const SignupContainer = props => <Signup {...props} />;

const mapStateToProps = (state) => {
  const { signup } = state;
  return {
    signup,
  }
};

const mapDispatchToProps = {
  showSignup,
  hideSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
