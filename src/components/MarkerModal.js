import React, { Component } from 'react';

import "../styles/MarkerModal.css";

import { saveToDatabase } from "../utils/utils";

class MarkerModal extends Component {
  constructor(props) {
    super(props);

    this.title = null;
    this.loc = null;
    this.startTime = null;
    this.endTime = null;
    this.moreInfo = null;

    this._onClose = this._onClose.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideMarkerModal } = this.props;
    hideMarkerModal();
  }

  _onSave(e) {
    e.stopPropagation();
    const { lastLoc, addMarker, hideMarkerModal } = this.props;

    let newMarker = {
      id: `${lastLoc.lat}-${lastLoc.lng}`,
      lat: lastLoc.lat,
      lng: lastLoc.lng,
      title: this.title.value,
      loc: this.loc.value,
      startTime: this.startTime.value,
      endTime: this.endTime.value,
      moreInfo: this.moreInfo.value,
    };

    addMarker(newMarker);

    saveToDatabase(newMarker);

    // Clean up input
    this.setState({
      title: { ...this.title, value: "" },
      loc: { ...this.loc, value: "" },
      startTime: { ...this.startTime, value: "" },
      endTime: { ...this.endTime, value: "" },
      moreInfo: { ...this.moreInfo, value: "" },
    })
    // Close modal
    hideMarkerModal();
  }

  render() {
    const { isMarkerModalOpen } = this.props;

    return !isMarkerModalOpen ? null : (
      <div
        id="myModal"
        className="modal"
      >
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={this._onClose}
            >
              &times;
              </span>
            <h2>Event Information</h2>
          </div>
          <div className="modal-body">
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addTitle"
                placeholder="Title"
                ref={(input) => { this.title = input }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addLocation"
                placeholder="Location"
                ref={(input) => { this.loc = input }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addStartTime"
                placeholder="Start Time"
                ref={(input) => { this.startTime = input }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addEndTime"
                placeholder="End Time"
                ref={(input) => { this.endTime = input }}
              />
            </div>
            <div className="input-container">
              <textarea
                className="form-input-paragraph"
                placeholder="Additional information"
                ref={(input) => { this.moreInfo = input }}
              />
            </div>
            <div className="input-container">
              <button
                className="button-save"
                onClick={this._onSave}
              >
                Save
                </button>
            </div>
          </div>
          <div className="modal-footer">
            <h3>Public or Private</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkerModal;