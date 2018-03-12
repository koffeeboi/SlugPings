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
    this._onDelete = this._onDelete.bind(this);
    this._onSync = this._onSync.bind(this);

    // Initialize database markers on start up
    this.props.retrieveDatabaseMarkers();
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

  _onDelete(id, dbID = null) {
    const { removeMarker, deleteDatabaseMarker } = this.props;
    removeMarker(id);
    deleteDatabaseMarker(dbID);
  }

  _getMarkers() {
    let createMarkers = (m) => {
      return m.map(({ _id, lat, lng, title, loc, startTime, endTime, moreInfo }, index) => {
        let id = `${lat}-${lng}`;
        return (
          <Marker position={{ lat: lat, lng: lng }} key={id}>
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
                <div
                  className="marker-options"
                  onClick={() => { this._onDelete(id, _id) }} >
                  <i className="fas fa-minus-circle fa-2x"></i>
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
      })
    };

    const { map, database } = this.props;
    const markers = map.markers;
    const dbMarkers = database.markers;
    let localMarkers = createMarkers(markers);
    let databaseMarkers = dbMarkers ? createMarkers(dbMarkers) : [];

    return [...localMarkers, ...databaseMarkers];
  }

  _onSync(event) {
    event.preventDefault();
    event.stopPropagation();
    const { retrieveDatabaseMarkers } = this.props;
    retrieveDatabaseMarkers();
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
        <div
          id="refreshbtn"
          className="marker-options"
          onClick={this._onSync} >
          <i className="fas fa-sync fa-2x"></i>
        </div>
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
