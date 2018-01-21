import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import "../styles/GoogleMap.css";

import Marker from "../components/Marker";
import { postMarkerToServer } from "../utils/utils";

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 36.992784, lng: -122.062233 },
    zoom: 16
  };

  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._genMarkers = this._genMarkers.bind(this);
    this._genDBMarkers = this._genDBMarkers.bind(this);
  }

  _onClick({ x, y, lat, lng, event }) {
    console.log("map clicked");

    const { pushMarker } = this.props;
    if (event.target.className.includes("marker-text")) {
      event.target.focus();
    } else {
      pushMarker({ x, y, lat, lng });
      postMarkerToServer({ x, y, lat, lng });
    }
  }

  _genMarkers() {
    const { map } = this.props;
    return map.markers.map((marker, index) => {
      return (
        <Marker
          key={"marker-" + index}
          lat={marker.lat}
          lng={marker.lng}
        />
      )
    });
  }

  _genDBMarkers() {
    const { map } = this.props;
    
    if (map.db == null) return;

    return map.db.map((marker, index) => {
      return (
        <Marker
          key={"marker-" + index}
          lat={marker.lat}
          lng={marker.lng}
        />
      )
    });
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          className="map"
          bootstrapURLKeys={{
            key: "AIzaSyAbDBAOO2E-5onre2peQuHTcaOtn1dav6k",
            language: 'en',
            region: 'us',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
          {this._genMarkers()}
          {this._genDBMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;