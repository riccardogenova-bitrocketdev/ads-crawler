/** @format */

import { Ad } from '../types';

/** @format */

interface Params {
  min: number;
  max: number;
}

export const utilityGetRandomInt = ({ min, max }: Params) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
  Math.ceil(min);

export const utilityFilterData = (ads: Ad[]) => {
  const filteredData = ads.map((ad: Ad) => ({
    urn: ad.urn,
    type: ad.type,
    category: ad.category,
    subject: ad.subject,
    body: ad.body,
    advertiser: ad.advertiser,
    date: ad.dates,
    features: ad.features,
    geo: ad.geo,
  }));

  return filteredData;
};

export const utilityCreateFileName = () => {
  const date = new Date();
  const timestamp = date.getTime();
  return timestamp;
};

type ExtensionSupported = 'csv' | 'json';

interface DownloadFileParams {
  file: string;
  extension: ExtensionSupported;
}

export const utilityDownloadFile = ({
  file,
  extension,
}: DownloadFileParams) => {
  let tempLink = document.createElement('a');
  tempLink.href = file;
  const fileName = utilityCreateFileName();
  tempLink.setAttribute('download', `${fileName}.${extension}`);
  tempLink.click();
};

export const utilityConvertDataToJSON = (data: any): string => {
  const dataStr = JSON.stringify(data);
  const obj = new Blob([dataStr], { type: 'text/json' });
  const jsonEncoded = window.URL.createObjectURL(obj);

  return jsonEncoded;
};

export const utilityConvertDataToCSV = (data: any): string => {
  let csvContent = 'data:text/csv;charset=utf-8,';
  data.forEach((ad: any) => {
    const stringAd = JSON.stringify(ad);
    csvContent = `${csvContent}${stringAd}\n`;
  });
  const csvEncoded = encodeURI(csvContent);

  return csvEncoded;
};
