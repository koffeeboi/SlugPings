import React, { Component } from 'react';


import "../styles/ChatChannels.css";


class ChatChannels extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
    this._getEvents = this._getEvents.bind(this);
  }

  componentsDidMount() {
  }


  

  render() {


    return  (
      <div className="chat">
        
      </div>
    );
  }
}

export default ChatChannels;