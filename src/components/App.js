import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import Button from "../components/Button";
import GoogleMap from "../components/GoogleMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap />
      </div>
    );
  }
}

export default App;
