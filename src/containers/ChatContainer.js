import React from 'react';
import { connect } from 'react-redux';

import Chat from '../components/Chat';

import {
  showChat,
  hideChat,
} from "../actions/ChatActions";

const ChatContainer = props => <Chat {...props} />;

const mapStateToProps = (state) => {
  const { chat } = state;

  return {
    chat,
  }
};

const mapDispatchToProps = {
  showChat,
  hideChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
