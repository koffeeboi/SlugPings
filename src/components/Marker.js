import React, { Component } from 'react';
import Draggable from 'react-draggable'; // The default

import "../styles/Marker.css";

import { postMarkerToServer } from "../utils/utils";

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    }

    this.onClick = this.onClick.bind(this);
    this._onTextClick = this._onTextClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidUpdate() {
    const { map, updateMarkerText, id } = this.props;
    if (this.text && this.text.textContent != this.state.text) {
      this.state.text = this.text.textContent;
      updateMarkerText({ id, text: this.state.text });

      for (let mark of map.markers) {
        if (mark.id == id) {
          postMarkerToServer({
            id,
            x: mark.x,
            y: mark.y,
            lat: mark.lat,
            lng: mark.lng,
            text: this.state.text
          });
        }
      }
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
            {this.props.text ? this.props.text : this.state.text}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Marker;