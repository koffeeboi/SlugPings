import React from 'react';
import { connect } from 'react-redux';

import Chat from '../components/Chat';

import {
  showChat,
  hideChat,
  showChatChannel,
  hideChatChannel,
} from "../actions/ChatActions";

const ChatContainer = props => <Chat {...props} />;

const mapStateToProps = (state) => {
  const { chat, map } = state;

  return {
    chat, map
  }
};

const mapDispatchToProps = {
  showChat,
  hideChat,
  showChatChannel,
  hideChatChannel,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
