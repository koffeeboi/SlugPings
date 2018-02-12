import React, { Component } from 'react';

import "../styles/Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this._onHide = this._onHide.bind(this);
    this._onShow = this._onShow.bind(this);
  }

  _onHide() {
    const { hideSidebar } = this.props;
    hideSidebar();
  }

  _onShow() {
    const { showSidebar } = this.props;
    showSidebar();
  }

  render() {
    const { sidebar } = this.props;
    const { isSidebarOpen } = sidebar;

    return !isSidebarOpen ? (
      <div className="sidebar-min">
        <div
          className="arrow-container"
          onClick={this._onShow}
        >
          <div className="arrow-right" />
        </div>
      </div>
    ) : (
        <div className="sidebar">
          <div className="hide-container">
            <span
              className="hide"
              onClick={this._onHide}
            >
              &times;
            </span >
          </div >
          <div className="sb-item">
            <span>Listings</span>
          </div>
          <div className="sb-item">
            <span>Chat</span>
          </div>
          <div className="support">
            <div className="sp-item">
              <span>Login</span>
            </div>
            <div className="sp-item">
              <span>Sign up</span>
            </div>
            <div className="sp-item">
              <span>Help</span>
            </div>
          </div>
        </div >
      );
  }
}

export default Sidebar;