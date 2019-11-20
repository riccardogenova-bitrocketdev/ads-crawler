/** @format */

// #region ::: IMPORT
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSagas } from './rootSagas';
// #endregion

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
};
