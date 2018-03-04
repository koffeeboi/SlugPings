import React, { Component } from 'react';

import "../styles/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideSignup } = this.props;
    hideSignup();
  }

  render() {
    const { signup } = this.props;
    const { isSignupOpen } = signup;

    return !isSignupOpen ? null : (
      <div className="signup">
        Sign up form
      </div>
    );
  }
}

export default Signup;