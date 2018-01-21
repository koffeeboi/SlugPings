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
    text: "",
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

    case (types.MAP_UPDATE_TEXT): {
      let j;
      for (let i = 0; i < state.markers.length; i++) {
        if (state.markers[i].id == action.payload.id){
          j = i; break;
        }
      }

      let d = state.markers.splice(j, 1)[0];
      d.text = action.payload.text;
      
      state.markers.push(d);
      return {
        ...state,
        markers: [...state.markers],
      }
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