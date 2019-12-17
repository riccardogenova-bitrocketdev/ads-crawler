/** @format */

// #region ::: IMPORT
import { call, delay, select, put } from 'redux-saga/effects';
import { apiSubito } from '../../api';
import {
  selectorPageFrom,
  selectorTotaleItems,
  selectorIsPolling,
  selectorAds,
} from '../selectors';
import {
  actionFetchDataFailure,
  actionSetTotalItems,
  actionFetchDataSuccess,
  actionFetchDataRequest,
  actionDownloadData,
  actionEmptyDataFetched,
} from '../actions';
import {
  utilityGetRandomInt,
  // utilityFilterData,
  utilityDownloadFile,
  utilityConvertDataToJSON,
  utilityConvertDataToCSV,
} from '../../helpers';
import { Response } from '../../types';
// #endregion

export function* sagaPollRate() {
  while (true) {
    try {
      const isPolling = yield select(selectorIsPolling);
      if (!isPolling) break;

      const page: number = yield select(selectorPageFrom);
      yield put(actionFetchDataRequest(page));
    } catch (errors) {
      actionFetchDataFailure(errors);
    }
    const randomDelay = utilityGetRandomInt({ min: 2000, max: 4000 });
    yield delay(randomDelay);
  }
}

export function* sagaFetchData(action: any) {
  try {
    const prevTotalItems: number = yield select(selectorTotaleItems);
    const response: Response = yield call(apiSubito, {
      page: action.from,
    });
    if (prevTotalItems !== response.count_all) {
      const date = new Date();
      const timestamp = date.getTime();
      yield put(
        actionSetTotalItems({
          date: timestamp,
          totalItems: response.count_all,
        }),
      );
    }
    yield put(actionFetchDataSuccess(response.ads));
  } catch (errors) {
    yield put(actionFetchDataFailure(errors));
  }
}

export function* sagaDownloadJSON() {
  const ads = yield select(selectorAds);
  if (ads.length > 0 && ads.length % 90 === 0) {
    const filteredAds = utilityFilterData(ads);

    const adsObject = filteredAds.reduce((obj: any, ad: any) => {
      obj[ad.urn] = ad;
      return obj;
    }, {});

    yield put(actionDownloadData(adsObject));
    const jsonEncoded = utilityConvertDataToJSON(adsObject);
    utilityDownloadFile({ file: jsonEncoded, extension: 'json' });
    yield put(actionEmptyDataFetched());
  } else return;
}

export function* sagaDownloadCSV() {
  const ads = yield select(selectorAds);
  if (ads.length > 0 && ads.length % 60 === 0) {
    yield put(actionDownloadData(ads));
    const csvEncoded = utilityConvertDataToCSV(ads);
    utilityDownloadFile({ file: csvEncoded, extension: 'csv' });
    yield put(actionEmptyDataFetched());
  } else return;
}
