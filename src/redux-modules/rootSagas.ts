/** @format */

// #region ::: IMPORT
import { takeLatest, takeEvery } from 'redux-saga/effects';
import { sagaPollRate, sagaFetchData, sagaDownloadJSON } from './sagas';
import {
  TYPE_START_POLLING,
  TYPE_FETCH_ADS_REQUEST,
  TYPE_FETCH_ADS_SUCCESS,
} from '../constants/action-type';
// #endregion

export function* rootSagas() {
  yield takeLatest(TYPE_START_POLLING, sagaPollRate);
  yield takeEvery(TYPE_FETCH_ADS_REQUEST, sagaFetchData);
  yield takeLatest(TYPE_FETCH_ADS_SUCCESS, sagaDownloadJSON);
}
