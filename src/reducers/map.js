import * as types from "../constants/LeafletMapConstants";

const initialState = {
  markers: [
    {
      lat: 36.99694,
      lng: -122.05954,
    },
  ],
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case (types.MAP_ADD_MARKER): {
      console.log(state.markers);
      return {
        ...state,
        markers: [...state.markers, action.payload],
      };
    }

    default:
      return state;
  }
}

export default map;