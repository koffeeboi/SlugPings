import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';

import configureStore from './store/configureStore';
import RootContainer from "./containers/RootContainer";
import Root from './components/Root';

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);