import React, { Component } from 'react';

import "../styles/EditMarkerModal.css";

import { editMarkerInDatabase } from "../utils/utils";

class EditMarkerModal extends Component {
  constructor(props) {
    super(props);

    this.title = null;
    this.loc = null;
    this.startTime = null;
    this.endTime = null;
    this.moreInfo = null;

    this._populateWithOldData = this._populateWithOldData.bind(this);
    this._onClose = this._onClose.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  componentDidUpdate() {
    const { map } = this.props;
    if (map.isEditMarkerModalOpen) {
      this._populateWithOldData();
    }
  }

  _populateWithOldData() {
    const { map, database } = this.props;
    let markers = [...map.markers, ...database.markers]

    for (let marker of markers) {
      if (marker.id === map.editMarkerID) {
        this.title.value = marker.title;
        this.loc.value = marker.loc;
        this.startTime.value = marker.startTime;
        this.endTime.value = marker.endTime;
        this.moreInfo.value = marker.moreInfo;
        return;
      }
    }
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideEditMarkerModal } = this.props;
    hideEditMarkerModal();
  }

  _onSave(e) {
    e.stopPropagation();
    const {
      map,
      hideEditMarkerModal,
      updateMarker,
      retrieveDatabaseMarkers,
    } = this.props;

    updateMarker(map.editMarkerID, {
      title: this.title.value,
      loc: this.loc.value,
      startTime: this.startTime.value,
      endTime: this.endTime.value,
      moreInfo: this.moreInfo.value,
    });

    editMarkerInDatabase(map.editDBMarkerID, {
      title: this.title.value,
      loc: this.loc.value,
      startTime: this.startTime.value,
      endTime: this.endTime.value,
      moreInfo: this.moreInfo.value,
    }, () => { retrieveDatabaseMarkers() });

    // Close modal
    hideEditMarkerModal();
  }

  render() {
    const { map, isEditMarkerModalOpen } = this.props;
    const { markers } = map;

    let editMarker = null;
    for (let marker of markers) {
      if (marker.id === map.editMarkerID) {
        editMarker = marker;
        break;
      }
    }

    return !isEditMarkerModalOpen ? null : (
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
            <h2>Edit Event Information</h2>
          </div>
          <div className="modal-body">
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addTitle"
                placeholder="Title"
                ref={(input) => this.title = input}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addLocation"
                placeholder="Location"
                ref={(input) => this.loc = input}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addStartTime"
                placeholder="Start Time"
                ref={(input) => this.startTime = input}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                id="addEndTime"
                placeholder="End Time"
                ref={(input) => this.endTime = input}
              />
            </div>
            <div className="input-container">
              <textarea
                className="form-input-paragraph"
                placeholder="Additional information"
                ref={(input) => this.moreInfo = input}
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

export default EditMarkerModal;