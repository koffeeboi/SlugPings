import React, { Component } from 'react';

import "../styles/Chat.css";
import ChatChannel from "../components/ChatChannel";

class Chat extends Component {
  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
    this._getEvents = this._getEvents.bind(this);
    this._getHome = this._getHome.bind(this);
    this._getChannel = this._getChannel.bind(this);
  }

  componentsDidMount() {
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideChat } = this.props;
    hideChat();
  }

  _getHome() {
    return (
      <div className="chat-content">
        <span
          className="chat-close"
          onClick={this._onClose}
        >
          &times;
        </span>
        <div className="chat-header">
          <span>Chat</span>
        </div>
        <div className="chat-body">
          {this._getEvents()}
        </div>
      </div>
    )

  }

  _getChannel() {
    const {
      chat,
      showChatChannel,
      hideChatChannel,
    } = this.props;

    return (
      <ChatChannel
        chat={chat}
        showChatChannel={showChatChannel}
        hideChatChannel={hideChatChannel}
      />
    )
  }

  /* This function lists out the all of the chat channels*/
  _getEvents() {
    const { map, showChatChannel, setChatChannelID } = this.props;
    const { markers } = map;

    let events = markers.map((marker, index) => {
      let openChannel = () => {
        setChatChannelID(marker.id);
        showChatChannel();
      }
      return (
        <div className="event" key={`${marker.id}`} onClick={openChannel}>
          <span>
            {marker.startTime} - {marker.endTime} {marker.title} @ {marker.loc}
            <i className="fas fa-ellipsis-v fa-1x" />
          </span>
        </div>
      )
    });
    return events;
  }

  render() {
    const { chat } = this.props;
    const { isChatOpen, isChannelOpen } = chat;

    return !isChatOpen ? null : (
      <div className="chat">
        {isChannelOpen ? this._getChannel() : this._getHome()}
      </div>
    );
  }
}

export default Chat;