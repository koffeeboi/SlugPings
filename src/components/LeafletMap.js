import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import "../styles/LeafletMap.css";

import MarkerModal from "../components/MarkerModal";

class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latlng: {
        lat: 36.99694,
        lng: -122.05954,
      }
    }

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    const { showMarkerModal, addMarker } = this.props;
    showMarkerModal();
    addMarker(e.latlng);
  }

  render() {
    const { map, hideMarkerModal } = this.props;
    const { isMarkerModalOpen } = map;

    return (
      <div className="map-container">
        <MarkerModal
          isMarkerModalOpen={isMarkerModalOpen}
          hideMarkerModal={hideMarkerModal}
        />
        <Map
          center={this.state.latlng}
          zoom={16}
          onClick={this._onClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={this.state.latlng}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default LeafletMap;