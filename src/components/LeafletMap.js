import React, { Component } from 'react';

import "../styles/LeafletMap.css";

import Marker from "../components/Marker";
import { postMarkerToServer } from "../utils/utils";

class LeaftletMap extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick({ x, y, lat, lng, event }) {
    console.log("map clicked");
  }

  render() {
    return (
      <div className="map-container">
        
      </div>
    );
  }
}

export default LeafletMap;