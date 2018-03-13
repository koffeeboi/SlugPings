import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '../components/LeafletMap';

import {
  showMarkerModal,
  hideMarkerModal,
  addMarker,
  setLastLoc,
  removeMarker,
  showEditMarkerModal,
  hideEditMarkerModal,
  setEditMarkerID,
  updateMarker,
  setEditDBMarkerID,
} from "../actions/LeafletMapActions";

import {
  retrieveDatabaseMarkers,
  deleteDatabaseMarker,
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
  deleteDatabaseMarker,
  showEditMarkerModal,
  hideEditMarkerModal,
  setEditMarkerID,
  updateMarker,
  setEditDBMarkerID,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);
