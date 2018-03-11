import * as types from "../constants/DatabaseConstants";

const initialState = {
  markers: [],
};

const database = (state = initialState, action) => {
  switch (action.type) {

    case (types.DB_SET_MARKERS): {
      return {
        ...state,
        markers: action.payload,
      }
    }

    default:
      return state;
  }
}

export default database;