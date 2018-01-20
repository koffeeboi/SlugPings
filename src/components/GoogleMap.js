import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import "../styles/GoogleMap.css";

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
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAbDBAOO2E-5onre2peQuHTcaOtn1dav6k",
            language: 'en',
            region: 'us',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Place'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;