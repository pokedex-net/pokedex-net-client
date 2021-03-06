import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import settings from './settings';
import ui from './ui';

/**
 * The Redux Saga middleware.
 * @type {Object}
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * The Redux store.
 * @type {Object}
 */
const store = createStore(
  persistReducer({
    key: 'settings',
    version: 1,
    whitelist: ['settings'],
    storage,
  }, combineReducers({
    settings: settings.reducer,
    ui: ui.reducer,
  })),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(function* rootSaga() {
  yield all([
    ...settings.sagas,
    ...ui.sagas,
  ]);
});

/**
 * The persistor object from redux-persist.
 * @type {Object}
 */
export const persistor = persistStore(store);

export default store;
