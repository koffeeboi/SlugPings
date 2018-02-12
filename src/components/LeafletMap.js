import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl, Tooltip } from 'react-leaflet'

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
    this._onCog = this._onCog.bind(this);
  }

  _onClick(e) {
    const { showMarkerModal, setLastLoc } = this.props;
    setLastLoc(e.latlng);
    showMarkerModal();
  }

  _onCog(e) {
    e.stopPropagation();
    const { showMarkerModal } = this.props;
    // TODO fix later, should be editMarkerModal
    showMarkerModal();
  }

  _getMarkers() {
    const { map } = this.props;
    const markers = map.markers;
    return markers.map(({ lat, lng, title, loc, startTime, endTime, moreInfo }, index) => {
      return (
        <Marker position={{ lat: lat, lng: lng }} key={`${lat}-${lng}-${index}`}>
          <Popup>
            <div>
              <span>{title}</span>
              <br />
              <span>{loc}</span>
              <br />
              <span>Start: {startTime} End: {endTime}</span>
              <br />
              <span>{moreInfo}</span>
              <br />
              <div
                className="marker-options"
                onClick={this._onCog} >
                <i className="fas fa-cog fa-2x"></i>
              </div>
            </div>
          </Popup>
          <Tooltip>
            <div>
              {title}
            </div>
          </Tooltip>
        </Marker>
      );
    });
  }

  render() {
    const { map, hideMarkerModal, addMarker } = this.props;
    const { isMarkerModalOpen, lastLoc } = map;

    return (
      <div className="map-container">
        <MarkerModal
          isMarkerModalOpen={isMarkerModalOpen}
          hideMarkerModal={hideMarkerModal}
          addMarker={addMarker}
          lastLoc={lastLoc}
        />
        <Map
          center={this.state.latlng}
          zoom={16}
          onClick={this._onClick}
          zoomControl={false}
        >
          <ZoomControl position="topright" />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this._getMarkers()}
        </Map>
      </div>
    );
  }
}

export default LeafletMap;