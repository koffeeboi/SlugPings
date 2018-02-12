import { combineReducers } from 'redux';

import sidebar from "../reducers/sidebar";
import listings from "../reducers/listings";
import map from "../reducers/map";

const rootReducer = combineReducers({
  sidebar,
  listings,
  map,
});

export default rootReducer
