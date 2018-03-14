import React, { Component } from 'react';
import io from 'socket.io-client';

import "../styles/ChatChannel.css";

import ChatChannelMessage from "../components/ChatChannelMessage";

class ChatChannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelID: this.props.chat.channelID,
      username: "",
      message: "",
      messages: [],
    }

    this._onClose = this._onClose.bind(this);
    this._addMessage = this._addMessage.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this._createMessages = this._createMessages.bind(this);

    this.socket = io(process.env.REACT_APP_API_URL);
    this.socket.on("RECEIVE_MESSAGE", (data) => {
      this._addMessage(data);
    });
  }

  _onClose(e) {
    e.stopPropagation();
    const { hideChatChannel } = this.props;
    hideChatChannel();
  }

  _addMessage(data) {
    this.setState({ messages: [...this.state.messages, data] });
  }

  _sendMessage(event) {
    event.preventDefault();
    this.socket.emit("SEND_MESSAGE", {
      username: this.state.username,
      channelID: this.state.channelID,
      message: this.state.message,
    });
    this.setState({ message: "" });
  }

  _createMessages() {
    return this.state.messages.map((message, index) => {
      let key = `${message}-${index}`;
      return (
        <ChatChannelMessage key={key} message={message} />
      )
    });
  }

  render() {
    const { chat, map, database} = this.props;
    let title = null;
    for (let marker of [...map.markers, ...database.markers]) {
      if (marker.id === chat.channelID) {
        title = marker.title;
      }
    }

    return (
      <div className="chat">
        <div className="chat-content">
          <span
            className="chat-close"
            onClick={this._onClose}
          >
            &times;
          </span>
          <div className="chat-header">
            {title ? "Chat for " + title : "Chat"}
          </div>
          <div className="chat-body">
            {this._createMessages()}
            <input
              type="text"
              placeholder="username"
              className="form-control input-username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="text"
              placeholder="Message"
              className="form-control input-message"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button
              className="btn btn-primary btn-lg send-btn"
              onClick={this._sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatChannel;