import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import LeafletMap from "../components/LeafletMap"

import GoogleMapContainer from "../containers/GoogleMapContainer";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <LeafletMap />
      </div>
    );
  }
}

export default Root;
