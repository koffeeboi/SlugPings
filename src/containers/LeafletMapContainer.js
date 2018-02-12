import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '../components/LeafletMap';

import { showMarkerModal, hideMarkerModal, addMarker } from "../actions/LeafletMapActions";

const LeafletMapContainer = props => <LeafletMap {...props} />;

const mapStateToProps = (state) => {
  const { map } = state;

  return {
    map,
  }
};

const mapDispatchToProps = {
  showMarkerModal,
  hideMarkerModal,
  addMarker,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);
