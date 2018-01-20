import React from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/GoogleMap';

import { setCurrLoc, pushMarker } from "../actions/GoogleMapActions";

const GoogleMapContainer = props => <GoogleMap {...props} />;

const mapStateToProps = (state) => {
  const { map } = state;

  return {
    map,
  }
};

const mapDispatchToProps = {
    setCurrLoc,
    pushMarker,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
