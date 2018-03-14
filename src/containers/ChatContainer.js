import React from 'react';
import { connect } from 'react-redux';

import Chat from '../components/Chat';

import {
  showChat,
  hideChat,
  showChatChannel,
  hideChatChannel,
  setChatChannelID,
} from "../actions/ChatActions";

const ChatContainer = props => <Chat {...props} />;

const mapStateToProps = (state) => {
  const { chat, map, database } = state;

  return {
    chat, map, database
  }
};

const mapDispatchToProps = {
  showChat,
  hideChat,
  showChatChannel,
  hideChatChannel,
  setChatChannelID,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
