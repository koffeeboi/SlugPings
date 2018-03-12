import * as types from "../constants/DatabaseConstants";

import { getMarkers } from "../utils/utils";

export const setDatabaseMarkersInStore = (markers) => ({
  type: types.DB_SET_MARKERS,
  payload: markers,
});

export const retrieveDatabaseMarkers = () => (dispatch, getState) => {
  getMarkers()
    .then(async (resp) => {
      let msg = await resp.json();

      if (msg.status !== 200)
        throw Error("Unable to get markers from database");

      //console.log(msg);
      console.log("Succesfully received markers from database");

      const { map } = getState();
      const { markers } = map;

      // Remove any duplicates such as own markers O(n^2)
      let dbMarkers = msg.markers.filter(dbMarker => {
        for (let marker of markers) {
          if (marker.id === dbMarker.id)
            return false;
        }
        return true;
      });
      dispatch(setDatabaseMarkersInStore(dbMarkers));
    })
    .catch(error => console.log(error));
};

export const deleteDatabaseMarker = (id) => (dispatch, getState) => {
  fetch("http://localhost:3001/database/marker/delete/" + id, {
    method: 'DELETE',
  })
    .then((resp) => {
      if (resp.status !== 200)
        throw Error("Something went wrong when deleting marker from database");

      dispatch(retrieveDatabaseMarkers());
      console.log("Successfully deleted marker=" + id);
    })
    .catch(err => console.log(err));
};