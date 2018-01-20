import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import Button from "../components/Button";
import Map from "../components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
