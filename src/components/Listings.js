import React, { Component } from 'react';

import "../styles/Listings.css";

class Listings extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
    this._getEvents = this._getEvents.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideListings } = this.props;
    hideListings();
  }

  _getEvents() {
    const { map } = this.props;
    const { markers } = map;

    let events = markers.map((marker, index) => {
      return (
        <div className="event" key={`${marker.title}-${index}`}>
          <span>
            {marker.startTime} - {marker.endTime} {marker.title} @ {marker.loc}
            <i className="fas fa-ellipsis-v fa-1x" />
          </span>
        </div>
      )
    });
    return events;
  }

  render() {
    const { listings } = this.props;
    const { isListingsOpen } = listings;

    return !isListingsOpen ? null : (
      <div
        id="myListings"
        className="listings"
      >
        <div className="listings-content">
          <span
            className="listings-close"
            onClick={this._onClose}
          >
            &times;
          </span>
          <div className="listings-header">
            <span>Listings</span>
          </div>
          <div className="listings-body">
            {this._getEvents()}
          </div>
        </div>
      </div>
    );
  }
}

export default Listings;