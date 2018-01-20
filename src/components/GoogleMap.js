import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import "../styles/GoogleMap.css";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-container">
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default Map;