import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ReduxThunk,
      createLogger({
        collapsed: true,
      }),
    ),
  );
}
