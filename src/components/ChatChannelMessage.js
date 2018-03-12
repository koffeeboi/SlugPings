import React, { Component } from 'react';

import "../styles/ChatChannelMessage.css";

class ChatChannelMessage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { message } = this.props;
    return (
      <div className="cc-msg-container">
        <span className="cc-username">{message.username}: </span>
        <span className="cc-msg">{message.message}</span>
      </div>
    )
  }
}

export default ChatChannelMessage;