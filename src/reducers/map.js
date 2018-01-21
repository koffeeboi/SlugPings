import * as types from "../constants/GoogleMapConstants";

const initialState = {
  currentLocClicked: {
    x: 0,
    y: 0,
    lat: 0,
    lng: 0,
  },
  markers: [{
    x: 5,
    y: 5,
    lat: 12,
    lng: 30,
  }],
  db: null,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case (types.MAP_SET_CURR_LOC): {
      return {
        ...state,
        currentLocClicked: { ...action.payload },
      };
    }

    case (types.MAP_PUSH_MARKER): {
      return {
        ...state,
        markers: [
          ...state.markers,
          action.payload,
        ],
      };
    }

    case (types.MAP_SET_FROM_DB): {
      return {
        ...state,
        db: action.payload,
      };
    }

    default:
      return state;
  }
}

export default map;