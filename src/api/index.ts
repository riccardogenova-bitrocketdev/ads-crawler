/** @format */

import { KEY_NUM_RESULTS_PER_PAGE, KEY_ORDER_DESC } from '../constants/general';

interface Params {
  page: number;
}
export const apiSubito = async ({ page }: Params) => {
  const response: any = await fetch(
    `https://www.subito.it/hades/v1/search/items?t=s&qso=false&sort=${KEY_ORDER_DESC}&lim=${KEY_NUM_RESULTS_PER_PAGE}&start=${page}`,
  );

  return response.json();
};
export const apiSubitoSiciliaAllAds = async ({ page }: Params) => {
  const response: any = await fetch(
    `https://www.subito.it/hades/v1/search/items?r=20&t=s&qso=false&sort=${KEY_ORDER_DESC}&lim=${KEY_NUM_RESULTS_PER_PAGE}&start=${page}`,
  );

  return response.json();
};
