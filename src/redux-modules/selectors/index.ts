/** @format */

import { Ad } from '../../types';

interface Total {
  totalItems: number;
  date: number;
}
interface Store {
  lastUpdate?: Total[];
  from?: number;
  ads?: Ad[];
  isPolling: boolean;
  adsDownloaded: number;
}

export const selectorAds = (store: Store) => {
  const prevAds = store.ads || {};

  return Object.values(prevAds);
};

export const selectorPageFrom = (store: Store): number => store.from || 0;

export const selectorIsPolling = (store: Store): boolean =>
  store.isPolling || false;

export const selectorTotaleItems = (store: Store): number | 0 => {
  const prevTotal = store.lastUpdate || [];
  if (prevTotal.length > 0) return prevTotal[prevTotal.length - 1].totalItems;
  else return 0;
};

export const selectorLastUpdate = (store: Store): number => {
  const prevTotal = store.lastUpdate || [];
  if (prevTotal.length > 0) return prevTotal[prevTotal.length - 1].date;
  else return 0;
};

export const selectorTotalDownloaded = (store: Store): number =>
  store.adsDownloaded || 0;

export const selectorPercentDownloaded = (store: Store): string | undefined => {
  const totalDownload = store.adsDownloaded || 0;

  const prevTotal = store.lastUpdate || [];
  let totalItems = 0;
  if (prevTotal.length > 0) {
    totalItems = prevTotal[prevTotal.length - 1].totalItems;

    const percent = (totalDownload * 100) / totalItems;
    return percent.toFixed(4);
  }
};
