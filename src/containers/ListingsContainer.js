import React from 'react';
import { connect } from 'react-redux';

import Listings from '../components/Listings';
import { showListings, hideListings } from "../actions/ListingsActions";

const ListingsContainer = props => <Listings {...props} />;

const mapStateToProps = (state) => {
  const { listings, map } = state;
  return {
    listings,
    map,
  }
};

const mapDispatchToProps = {
  showListings,
  hideListings,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
