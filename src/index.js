import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import "./database/server";

import './styles/index.css';

import configureStore from './store/configureStore';
import RootContainer from "./containers/RootContainer";
import { setDatabaseMarkersInStore } from "./actions/DatabaseAction";
import { getMarkers } from "./utils/utils";

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);

// Poll for database markers and set in store
const retrieveDatabaseMarkers = () => {
  setInterval(async () => {
    getMarkers()
      .then(async (resp) => {
        let msg = await resp.json();

        if (msg.status != 200)
          throw Error("Unable to get markers from database");

        //console.log(msg);
        console.log("Succesfully received markers from database");

        const { map } = store.getState();
        const { markers } = map;

        // Remove any duplicates such as own markers O(n^2)
        let dbMarkers = msg.markers.filter(dbMarker => {
          for (let marker of markers) {
            if (marker.id == dbMarker.id)
              return false;
          }
          return true;
        });

        store.dispatch(setDatabaseMarkersInStore(dbMarkers));
      })
      .catch(error => console.log(error));
  }, 2000);
};
// retrieveDatabaseMarkers();

// const retrieveData = () => {
//   setInterval(async () => {
//     const response = await fetch('https://slugpings-database.herokuapp.com/api/storage', {mode: 'cors'});
//     const body = await response.json();ss

//     if (response.status !== 200) throw Error(body.message);

//     console.log(body);
//     let array = [];
//     for (let m of body) {
//       array.push(JSON.parse(m));
//     }
//     store.dispatch(setDBMarkers(array));
//   }, 2000);
// }
// retrieveData();