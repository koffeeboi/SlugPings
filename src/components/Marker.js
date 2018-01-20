import React, { Component } from 'react';
import Draggable from 'react-draggable'; // The default

import "../styles/Marker.css";

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this.onClick = this.onClick.bind(this);
    this._onTextClick = this._onTextClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.visible) {
      this.state.visble = true;
    }
  }

  onClick(e) {
    console.log("marker clicked");
  }

  _onTextClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleStart(e) {
    e.preventDefault();
    console.log("start");
    if (e.button == 0) return;
    console.log("didn't return start");
  }

  handleDrag(e) {
    console.log("drag");
    if (e.button == 0) return;
    console.log("didn't return drag");
  }

  handleStop(e) {
    console.log("stop");
    if (e.button == 0) return;
    console.log("didn't return stop");
  }

  render() {
    return (
      <Draggable
        axis="both"
        allowAnyClick={true}
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[1, 1]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div
          className="marker handle"
          onClick={this.onClick}
        >
          <div
            className="marker-text"
            contentEditable="true"
            onClick={this._onTextClick}
            ref={(input) => { this.text = input }}
          >
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Marker;