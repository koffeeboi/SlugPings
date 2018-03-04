import React from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { showSidebar, hideSidebar } from "../actions/SidebarActions";
import { showListings, hideListings } from "../actions/ListingsActions";
import { showChat, hideChat } from "../actions/ChatActions";
import { showLogin, hideLogin } from "../actions/LoginActions";
import { showSignup, hideSignup } from "../actions/SignupActions";

const SidebarContainer = props => <Sidebar {...props} />;

const mapStateToProps = (state) => {
  const { sidebar } = state;
  return {
    sidebar,
  }
};

const mapDispatchToProps = {
  showSidebar,
  hideSidebar,
  showListings,
  hideListings,
  showChat,
  hideChat,
  showLogin,
  hideLogin,
  showSignup,
  hideSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
