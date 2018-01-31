import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import GoogleMapContainer from "../containers/GoogleMapContainer";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <GoogleMapContainer />
        //<button id="open-form" onClick={()=>{console.log('oop')}}>open form</button>
        <button onClick={this.props.closePopup}>close me</button>
      </div>
    );
  }
}

export default Root;
