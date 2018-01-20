import React, { Component } from 'react';

import "../styles/Marker.css";

class Marker extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
  }



  render() {
    const { text } = this.props;
    return (
      <div
        className="marker"
      >
        <div
          className="marker-text"
        >
          {text}
        </div>
      </div>
    );
  }
}

export default Marker;