import { combineReducers } from 'redux';

import sidebar from "../reducers/sidebar";
import map from "../reducers/map";

const rootReducer = combineReducers({
  sidebar,
  map,
});

export default rootReducer
