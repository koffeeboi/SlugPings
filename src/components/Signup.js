import React, { Component } from 'react';

import "../styles/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidEmail: false,
      invalidPassword: false,
      invalidVerifyPassword: false,
    }

    this._onClose = this._onClose.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideSignup } = this.props;
    this.setState({ invalidEmail: false, invalidPassword: false, invalidVerifyPassword: false });
    hideSignup();
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

    if (this.password.value !== this.verifyPassword.value) {
      console.log(`Passwords do not match: ${this.password.value} ${this.verifyPassword.value}`);
      this.setState({ invalidPassword: true, invalidVerifyPassword: true });
      e.preventDefault();
      return false;
    }
    this.setState({ invalidPassword: false, invalidVerifyPassword: false });
  }

  render() {
    const { signup } = this.props;
    const { isSignupOpen } = signup;

    return !isSignupOpen ? null : (
      <div
        className="signup"
      >
        <div className="signup-content">
          <div className="signup-header">
            <span
              className="close"
              onClick={this._onClose}
            >
              &times;
            </span>
            <h2>Sign up</h2>
          </div>
          <div className="signup-body">
            <form id="SignupForm" action={process.env.REACT_APP_API_URL} method="POST">
              <fieldset>
              Email<br />
                <input
                  className={this.state.invalidEmail ? "invalid" : ""}
                  id="iEmail"
                  type="text"
                  name="email"
                  placeholder="Email (@ucsc.edu)"
                  ref={(input) => { this.email = input }}
                />
                <br /><br />
                Password<br />
                <input
                  className={this.state.invalidPassword ? "invalid" : ""}
                  id="iPassword"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={(input) => { this.password = input }}
                />
                <br /><br />
                Verify Password<br />
                <input
                  className={this.state.invalidVerifyPassword ? "invalid" : ""}
                  id="iVerifyPassword"
                  type="password"
                  name="verifyPassword"
                  placeholder="Verify Password"
                  ref={(input) => { this.verifyPassword = input }}
                />
                <br /><br />
              </fieldset>
              <input form="SignupForm" type="submit" class="btn" onClick={this._onSubmit} />
            </form>
              <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;