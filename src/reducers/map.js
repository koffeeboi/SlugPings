import * as types from "../constants/LeafletMapConstants";

const initialState = {
  isMarkerModalOpen: false,
  markers: [
    {
      lat: 36.99694,
      lng: -122.05954,
      title: "Hi world!",
      loc: "Rachel Carson",
      startTime: "9:00 pm",
      endTime: "10:00 pm",
      moreInfo: "Bring snacks",
    },
  ],
  lastLoc: {
    lat: null,
    lng: null,
  },
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case (types.MAP_SHOW_MARKER_MODAL): {
      return {
        ...state,
        isMarkerModalOpen: true,
      }
    }

    case (types.MAP_HIDE_MARKER_MODAL): {
      return {
        ...state,
        isMarkerModalOpen: false,
      }
    }

    case (types.MAP_ADD_MARKER): {
      return {
        ...state,
        markers: [...state.markers, action.payload],
      };
    }

    case (types.MAP_SET_LAST_LOC): {
      return {
        ...state,
        lastLoc: action.payload,
      };
    }

    default:
      return state;
  }
}

export default map;