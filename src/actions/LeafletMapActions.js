import * as types from "../constants/LeafletMapConstants";

export const showMarkerModal = () => ({
  type: types.MAP_SHOW_MARKER_MODAL
})

export const hideMarkerModal = () => ({
  type: types.MAP_HIDE_MARKER_MODAL
})

export const addMarker = ({ lat, lng, title, loc, startTime, endTime, moreInfo }) => ({
  type: types.MAP_ADD_MARKER,
  payload: {
    lat: lat,
    lng: lng,
    title: title,
    loc: loc,
    startTime: startTime,
    endTime: endTime,
    moreInfo: moreInfo,
  },
});

export const setLastLoc = ({ lat, lng }) => ({
  type: types.MAP_SET_LAST_LOC,
  payload: {
    lat: lat,
    lng: lng,
  }
})