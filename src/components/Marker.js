import React, { Component } from 'react';

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
        style={{
          position: 'relative',
          color: 'white',
          background: 'red',
          height: 40,
          width: 60,
          top: -20,
          left: -30,
        }}>
        {text}
      </div>
    );
  }
}

export default Marker;