import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '../components/LeafletMap';

import { setCurrLoc, pushMarker, updateMarkerText  } from "../actions/LeafletMapActions";

const LeafletMapContainer = props => <LeafletMap {...props} />;

const mapStateToProps = (state) => {
  const { map } = state;

  return {
    map,
  }
};

const mapDispatchToProps = {
    setCurrLoc,
    pushMarker,
    updateMarkerText,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);
