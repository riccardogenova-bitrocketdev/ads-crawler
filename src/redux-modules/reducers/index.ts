/** @format */

import {
  TYPE_FETCH_ADS_SUCCESS,
  TYPE_SET_TOTAL_ADS,
  TYPE_FETCH_ADS_REQUEST,
  TYPE_START_POLLING,
  TYPE_STOP_POLLING,
  TYPE_LOAD_PREV_STATE,
  TYPE_EMPTY_ADS_FETCHED,
  TYPE_FETCH_ADS_FAILURE,
} from '../../constants/action-type';
import { KEY_NUM_RESULTS_PER_PAGE } from '../../constants/general';

export const reducer = (store: any = {}, action: any) => {
  const prevAds = store.ads || [];
  const prevTotal = store.total || [];

  switch (action.type) {
    case TYPE_LOAD_PREV_STATE:
      return {
        ...action.payload,
      };
    case TYPE_EMPTY_ADS_FETCHED:
      const newStore = { ...store };
      if (newStore.ads) delete newStore.ads;
      const prevFilesDownloaded = store.fileDownloaded || 0;
      const newFilesDownloaded = prevFilesDownloaded + 1;
      const newAdsDownloaded = store.ads.length * newFilesDownloaded;
      localStorage.setItem('adsDownloaded', JSON.stringify(newAdsDownloaded));
      localStorage.setItem(
        'fileDownloaded',
        JSON.stringify(newFilesDownloaded),
      );

      return {
        ...newStore,
        fileDownloaded: newFilesDownloaded,
        adsDownloaded: newAdsDownloaded,
      };

    case TYPE_START_POLLING:
      return {
        ...store,
        isPolling: true,
      };
    case TYPE_STOP_POLLING:
      return {
        ...store,
        isPolling: false,
      };
    case TYPE_SET_TOTAL_ADS:
      const lastUpdate = [...prevTotal, action.payload];

      localStorage.setItem('lastUpdate', JSON.stringify(lastUpdate));

      return {
        ...store,
        lastUpdate,
      };
    case TYPE_FETCH_ADS_REQUEST:
      const from = action.from + KEY_NUM_RESULTS_PER_PAGE;
      localStorage.setItem('from', JSON.stringify(from));

      return {
        ...store,
        from,
      };
    case TYPE_FETCH_ADS_SUCCESS:
      return {
        ...store,
        ads: [...prevAds, ...action.payload],
      };
    case TYPE_FETCH_ADS_FAILURE:
      return {
        ...store,
        from: store.from - KEY_NUM_RESULTS_PER_PAGE,
      };
    default:
      return store;
  }
};
