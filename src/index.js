import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';

import configureStore from './store/configureStore';
import { pushMarker } from "./actions/GoogleMapActions";
import RootContainer from "./containers/RootContainer";
import Root from './components/Root';

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);

const retrieveData = () => {
  setInterval(async () => {
    const response = await fetch('https://fierce-hamlet-12953.herokuapp.com/api/storage', {mode: 'cors'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log(body);
    for (let m of body) {
      store.dispatch(pushMarker(JSON.parse(m)));
    }
  }, 2000);
}
retrieveData();