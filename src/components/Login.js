import React, { Component } from 'react';

import "../styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidEmail: false,
      invalidPassword: false,
    }

    this._onClose = this._onClose.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideLogin } = this.props;
    hideLogin();
  }

  _onSubmit(e) {
    e.stopPropagation();
    if (!this.email.value.endsWith("@ucsc.edu")) {
      console.log(`${this.email.value} does not end with @ucsc.edu`);
      this.setState({ invalidEmail: true });
      e.preventDefault();
      return false;
    }
    this.setState({ invalidEmail: false });
    this.setState({ invalidPassword: false });
  }

  render() {
    const { login } = this.props;
    const { isLoginOpen } = login;

    return !isLoginOpen ? null : (
      <div className="login">
        Login form
        <div className="login-content">
          <div className="login-header">
            <span
              className="close-btn"
              onClick={this._onClose}
            >
              &times;
            </span>
            <h2>Login</h2>
          </div>
          <div className="login-body">
            <form id="LoginForm" action="{process.env.REACT_APP_API_URL}/login" method="POST">
              <fieldset>
                Login<br />
                <input
                  className={this.state.invalidEmail ? "form-control invalid" : "form-control"}
                  id="iEmail"
                  type="text"
                  name="email"
                  placeholder="Email (@ucsc.edu)"
                  ref={(input) => { this.email = input }}
                />
                <br />
                Password<br />
                <input
                  className={this.state.invalidPassword ? "form-control invalid" : "form-control"}
                  id="iPassword"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={(input) => { this.password = input }}
                />
                <br />
              </fieldset>
              <input form="LoginForm" type="submit" className="btn btn-primary" onClick={this._onSubmit} />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;