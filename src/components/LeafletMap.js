import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import "../styles/LeafletMap.css";

import { postMarkerToServer } from "../utils/utils";

const position = [36.9924,-122.0562]

class LeafletMap extends Component {
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
        <div className="leafletmap">
          <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup.<br />Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}

export default LeafletMap;