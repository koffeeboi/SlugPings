import React, { Component } from 'react';

import "../styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideLogin } = this.props;
    hideLogin();
  }

  render() {
    const { login } = this.props;
    const { isLoginOpen } = login;

    return !isLoginOpen ? null : (
      <div className="login">
        Login form
      </div>
    );
  }
}

export default Login;