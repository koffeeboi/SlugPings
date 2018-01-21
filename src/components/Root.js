import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import GoogleMapContainer from "../containers/GoogleMapContainer";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <GoogleMapContainer />
      </div>
    );
  }
}

export default Root;
