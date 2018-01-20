import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import Button from "../components/Button";
import GoogleMap from "../components/GoogleMap";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <GoogleMap />
      </div>
    );
  }
}

export default Root;
