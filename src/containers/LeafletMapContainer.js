import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '../components/LeafletMap';

import {
  showMarkerModal,
  hideMarkerModal,
  addMarker,
  setLastLoc,
  removeMarker,
} from "../actions/LeafletMapActions";

import {
  retrieveDatabaseMarkers,
} from "../actions/DatabaseAction";

const LeafletMapContainer = props => <LeafletMap {...props} />;

const mapStateToProps = (state) => {
  const { map, database, } = state;

  return {
    map,
    database,
  }
};

const mapDispatchToProps = {
  showMarkerModal,
  hideMarkerModal,
  addMarker,
  setLastLoc,
  removeMarker,
  retrieveDatabaseMarkers,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);
