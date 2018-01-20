import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import Button from "../components/Button";
import Map from "../components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <Map />
      </div>
    );
  }
}

export default App;
