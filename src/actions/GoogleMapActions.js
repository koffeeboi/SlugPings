import * as types from "../constants/GoogleMapConstants";

export const setCurrLoc = ({ x, y, lat, lng }) => ({
    type: types.MAP_SET_CURR_LOC,
    payload: {
        x: x,
        y: y,
        lat: lat,
        lng: lng,
    }
});

export const pushMarker = ({ x, y, lat, lng }) => ({
    type: types.MAP_PUSH_MARKER,
    payload: {
        x: x,
        y: y,
        lat: lat,
        lng: lng,
    }
});