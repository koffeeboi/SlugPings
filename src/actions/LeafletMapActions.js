import * as types from "../constants/LeafletMapConstants";

export const addMarker = ({ lat, lng, }) => ({
    type: types.MAP_ADD_MARKER,
    payload: {
        lat: lat,
        lng: lng,
    }
});