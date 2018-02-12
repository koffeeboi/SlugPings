import React from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { showSidebar, hideSidebar } from "../actions/SidebarActions";
import { showListings, hideListings } from "../actions/ListingsActions";

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
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
