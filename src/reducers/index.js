import { combineReducers } from 'redux';

import sidebar from "../reducers/sidebar";
import listings from "../reducers/listings";
import chat from "../reducers/chat";
import login from "../reducers/login";
import signup from "../reducers/signup";
import map from "../reducers/map";

const rootReducer = combineReducers({
  sidebar,
  listings,
  chat,
  login,
  signup,
  map,
});

export default rootReducer
