import React, { Component } from 'react';

import "../styles/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideSignup } = this.props;
    hideSignup();
  }

  _onSubmit(e) {
    e.stopPropagation();
    if (!this.email.value.endsWith("@ucsc.edu")) {
      console.log(`${this.email.value} does not end with @ucsc.edu`);
      e.preventDefault();
      return false;
    }

    if (this.password.value != this.verifyPassword.value) {
      // console.log(`Passwords do not match: ${this.password.value} ${this.verifyPassword.value}`);s
      e.preventDefault();
      return false;
    }
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
            <form id="SignupForm" action="http://localhost:3001" method="POST">
              <fieldset>
                <input
                  id="iEmail"
                  type="text"
                  name="email"
                  placeholder="Email (@ucsc.edu)"
                  ref={(input) => { this.email = input }}
                />
                <br />
                <input
                  id="iPassword"
                  type="text"
                  name="password"
                  placeholder="Password"
                  ref={(input) => { this.password = input }}
                />
                <br />
                <input
                  id="iVerifyPassword"
                  type="text"
                  name="verifyPassword"
                  placeholder="Verify Password"
                  ref={(input) => { this.verifyPassword = input }}
                />
                <br />
              </fieldset>
              <input form="SignupForm" type="submit" onClick={this._onSubmit} />
            </form>
            {/* <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addTitle"
                placeholder="Title"
                ref={(input) => { this.title = input }}
              />
            </div>
            <input
              type="text"
              className="form-input"
              id="addTitle"
              placeholder="username"
              ref={(input) => { this.title = input }}
            />
          </div> <div className="input-container">
            <input
              type="text"
              className="form-input"
              id="addTitle"
              placeholder="password"
              ref={(input) => { this.title = input }}
            />
          </div>
          <div className="input-container">
            <button
              className="button-save"
              onClick={this._onSave}
            >
              Save
                </button>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;