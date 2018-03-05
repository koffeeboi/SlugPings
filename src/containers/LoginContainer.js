import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import { showLogin, hideLogin } from "../actions/LoginActions";

const LoginContainer = props => <Login {...props} />;

const mapStateToProps = (state) => {
  const { login } = state;
  return {
    login,
  }
};

const mapDispatchToProps = {
  showLogin,
  hideLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
