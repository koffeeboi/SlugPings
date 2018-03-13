import * as types from "../constants/LeafletMapConstants";

const initialState = {
  isMarkerModalOpen: false,
  isEditMarkerModalOpen: false,
  editMarkerID: null,
  editDBMarkerID: null,
  markers: [
    {
      id: 36.99694 + "-" + -122.05954,
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

    case (types.MAP_SET_EDIT_MARKER_MODAL_ID): {
      return {
        ...state,
        editMarkerID: action.payload,
      }
    }

    case (types.MAP_SET_EDIT_DB_MARKER_ID): {
      return {
        ...state,
        editDBMarkerID: action.payload,
      }
    }

    case (types.MAP_SHOW_EDIT_MARKER_MODAL): {
      return {
        ...state,
        isEditMarkerModalOpen: true,
      }
    }

    case (types.MAP_HIDE_EDIT_MARKER_MODAL): {
      return {
        ...state,
        isEditMarkerModalOpen: false,
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

    case (types.MAP_SET_MARKERS): {
      return {
        ...state,
        markers: action.payload,
      }
    }

    default:
      return state;
  }
}

export default map;