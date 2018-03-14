import React, { Component } from 'react';

import "../styles/ListingInfo.css";

class ListingInfo extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
  }

  _onClose(event) {
    event.stopPropagation();
    const { hideListingInfo } = this.props;
    hideListingInfo();
  }

  render() {
    const { info } = this.props;

    return (
      <div className="listing-info-content">
        <span
          className="listing-info-close"
          onClick={this._onClose}
        >
          &times;
        </span>
        <div className="listing-info-header">
          <span>Information for {info.title}</span>
        </div>
        <div className="listing-info-body">
          <div className="listing-info-item">
            Event name: {info.title}
          </div>
          <div className="listing-info-item">
            Location: {info.loc}
          </div>
          <div className="listing-info-item">
            Start time: {info.startTime}
          </div>
          <div className="listing-info-item">
            End time: {info.endTime}
          </div>
          <div className="listing-info-item">
            Description: {info.moreInfo}
          </div>
        </div>
      </div>
    );
  }
}

export default ListingInfo;