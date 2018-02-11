import * as types from "../constants/LeafletMapConstants";

export const setCurrLoc = ({ x, y, lat, lng }) => ({
    type: types.MAP_SET_CURR_LOC,
    payload: {
        x: x,
        y: y,
        lat: lat,
        lng: lng,
    }
});

export const pushMarker = ({ id, x, y, lat, lng, }) => ({
    type: types.MAP_PUSH_MARKER,
    payload: {
        id: id,
        x: x,
        y: y,
        lat: lat,
        lng: lng,
    }
});

export const updateMarkerText = ({id, text}) => ({
    type: types.MAP_UPDATE_TEXT,
    payload: {
        id,
        text,
    }
})

export const setDBMarkers = (arrayOfObjects) => ({
    type: types.MAP_SET_FROM_DB,
    payload: arrayOfObjects
});