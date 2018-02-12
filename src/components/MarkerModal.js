import React, { Component } from 'react';

import "../styles/MarkerModal.css";

class MarkerModal extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideMarkerModal } = this.props;
    hideMarkerModal();
  }

  render() {
    const { isMarkerModalOpen, hideMarkerModal } = this.props;

    return !isMarkerModalOpen ? null
      : (
        <div
          id="myModal"
          className="modal"
          ref={(input) => { this.modal = input }}
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
              <input
                type="text"
                className="form-input"
                id="addTitle"
                placeholder="Title"
              />
              <input
                type="text"
                className="form-input"
                id="addLocation"
                placeholder="Location"
              />
              <input
                type="text"
                className="form-input"
                id="addStartTime"
                placeholder="Start Time"
              />
              <input
                type="text"
                className="form-input"
                id="addEndTime"
                placeholder="End Time"
              />
              <textarea
                className="form-input-paragraph"
                placeholder="Additional information"
              />
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