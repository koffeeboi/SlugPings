import React, { Component } from 'react';


import "../styles/ChatChannel.css";


class ChatChannel extends Component {
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
        poop
      </div>
    );
  }
}

export default ChatChannel;