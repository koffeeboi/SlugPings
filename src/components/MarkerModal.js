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
              <div className="input-container">
                <input
                  type="text"
                  className="form-input"
                  id="addTitle"
                  placeholder="Title"
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="form-input"
                  id="addLocation"
                  placeholder="Location"
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="form-input"
                  id="addStartTime"
                  placeholder="Start Time"
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="form-input"
                  id="addEndTime"
                  placeholder="End Time"
                />
              </div>
              <div className="input-container">
                <textarea
                  className="form-input-paragraph"
                  placeholder="Additional information"
                />
              </div>
              <div className="input-container">
                <button
                  className="button-save"
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