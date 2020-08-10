import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createSagaMiddleware from 'redux-saga';

import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import sagas from './sagas';
import epics from './epics';

const myLogger = (store) => (next) => (action) => {
  // console.log("Log Action: ", action);
  next(action);
}

const sagaMiddleware = createSagaMiddleware();

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers,
  {},
  applyMiddleware(myLogger, logger, thunk, promise, sagaMiddleware, epicMiddleware)
);

sagaMiddleware.run(sagas);

epicMiddleware.run(epics);

store.subscribe(() => {
  // console.log("Store Updated!", store.getState())
})

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 10
// });

// store.dispatch({
//   type: "SET_AGE",
//   payload: 2
// })

export default store;