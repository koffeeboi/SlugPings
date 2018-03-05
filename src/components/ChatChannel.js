import React, { Component } from 'react';

import "../styles/ChatChannel.css";

class ChatChannel extends Component {
  componentsDidMount() {
  }

  render() {
    const { chat } = this.props;

    return (
      <div className="chat">
        <div className="chat-header">
          <span>{chat.channelID}</span>
        </div>
      </div>
    );
  }
}

export default ChatChannel;