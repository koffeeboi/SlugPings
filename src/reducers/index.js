import { combineReducers } from 'redux';

import sidebar from "../reducers/sidebar";
import listings from "../reducers/listings";
import chat from "../reducers/chat";
import map from "../reducers/map";

const rootReducer = combineReducers({
  sidebar,
  listings,
  chat,
  map,
});

export default rootReducer
