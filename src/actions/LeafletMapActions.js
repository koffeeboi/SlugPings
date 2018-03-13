import * as types from "../constants/LeafletMapConstants";

export const showMarkerModal = () => ({
  type: types.MAP_SHOW_MARKER_MODAL
})

export const hideMarkerModal = () => ({
  type: types.MAP_HIDE_MARKER_MODAL
})

export const showEditMarkerModal = () => ({
  type: types.MAP_SHOW_EDIT_MARKER_MODAL
})

export const hideEditMarkerModal = () => ({
  type: types.MAP_HIDE_EDIT_MARKER_MODAL
})

export const setEditMarkerID = (id) => ({
  type: types.MAP_SET_EDIT_MARKER_MODAL_ID,
  payload: id,
})

export const setEditDBMarkerID = (id) => ({
  type: types.MAP_SET_EDIT_DB_MARKER_ID,
  payload: id,
})

export const addMarker = ({ id, lat, lng, title, loc, startTime, endTime, moreInfo }) => ({
  type: types.MAP_ADD_MARKER,
  payload: {
    id: id,
    lat: lat,
    lng: lng,
    title: title,
    loc: loc,
    startTime: startTime,
    endTime: endTime,
    moreInfo: moreInfo,
  },
});

export const setMarkers = (markers) => ({
  type: types.MAP_SET_MARKERS,
  payload: markers,
})

export const updateMarker = (id, marker) => (dispatch, getState) => {
  const { map } = getState();
  const newMarkers = [...map.markers];
  for (let i = 0; i < newMarkers.length; i++) {
    if (newMarkers[i].id === id) {
      newMarkers[i].title = marker.title;
      newMarkers[i].loc = marker.loc;
      newMarkers[i].startTime = marker.startTime;
      newMarkers[i].endTime = marker.endTime;
      newMarkers[i].moreInfo = marker.moreInfo;
    }
  }
  dispatch(setMarkers(newMarkers));
}

export const removeMarker = (id) => (dispatch, getState) => {
   const { map } = getState();
   const newMarkers = [...map.markers];
   for (let i = 0; i < newMarkers.length; i++) {
     if (newMarkers[i].id === id) {
       // Remove the marker at index i
       newMarkers.splice(i, 1);
     }
   }
   dispatch(setMarkers(newMarkers));
};

export const setLastLoc = ({ lat, lng }) => ({
  type: types.MAP_SET_LAST_LOC,
  payload: {
    lat: lat,
    lng: lng,
  }
})