import React from 'react';
import { connect } from 'react-redux';

import Listings from '../components/Listings';
import { 
  showListings, 
  hideListings, 
  showListingInfo, 
  hideListingInfo,
  setListingInfoID,
} from "../actions/ListingsActions";

const ListingsContainer = props => <Listings {...props} />;

const mapStateToProps = (state) => {
  const { listings, map, database } = state;
  return {
    listings,
    map,
    database
  }
};

const mapDispatchToProps = {
  showListings,
  hideListings,
  showListingInfo,
  hideListingInfo,
  setListingInfoID,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer);
