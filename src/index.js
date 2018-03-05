import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import "./database/server";

import './styles/index.css';

import configureStore from './store/configureStore';
import RootContainer from "./containers/RootContainer";

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);

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