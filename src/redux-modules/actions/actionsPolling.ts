/** @format */

import {
  TYPE_START_POLLING,
  TYPE_STOP_POLLING,
} from '../../constants/action-type';

export const actionStartPolling = () => ({
  type: TYPE_START_POLLING,
});

export const actionStopPolling = () => ({
  type: TYPE_STOP_POLLING,
});
