/** @format */

import {
  TYPE_FETCH_ADS_SUCCESS,
  TYPE_FETCH_ADS_FAILURE,
  TYPE_SET_TOTAL_ADS,
  TYPE_FETCH_ADS_REQUEST,
  TYPE_DOWNLOAD_DATA,
  TYPE_LOAD_PREV_STATE,
  TYPE_EMPTY_ADS_FETCHED,
} from '../../constants/action-type';

export const actionLoadPrevState = (prevState: any) => ({
  type: TYPE_LOAD_PREV_STATE,
  payload: prevState,
});
export const actionDownloadData = (payload: any) => ({
  type: TYPE_DOWNLOAD_DATA,
  payload,
});

export const actionFetchDataRequest = (from: number) => ({
  type: TYPE_FETCH_ADS_REQUEST,
  from,
});

export const actionFetchDataSuccess = (payload: any[]) => ({
  type: TYPE_FETCH_ADS_SUCCESS,
  payload,
});

export const actionFetchDataFailure = (errors: any[]) => ({
  type: TYPE_FETCH_ADS_FAILURE,
  errors,
});

interface Payload {
  date: number;
  totalItems: number;
}

export const actionSetTotalItems = (payload: Payload) => ({
  type: TYPE_SET_TOTAL_ADS,
  payload,
});

// export const actionSetTotalDownload = (totalDownloaded: number) => ({
//   type: TYPE_SET_TOTAL_DOWNLOADED,
//   payload: totalDownloaded,
// });

export const actionEmptyDataFetched = () => ({
  type: TYPE_EMPTY_ADS_FETCHED,
});
