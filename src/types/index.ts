/** @format */

export interface Response {
  ads: Ad[];
  checknew: string;
  count_all: number;
  lines: number;
  start: number;
  filters: Filters;
}
interface Filters {
  lim: string;
  qso: string;
  sort: string;
  start: string;
  t: string;
}
export interface Ad {
  urn: string;
  urls: Urls;
  type: Type;
  subject: string;
  images: Image[];
  geo: Geo;
  features: Feature[];
  dates: Dates;
  category: Category;
  body: string;
  advertiser: Advertiser;
}
interface Urls {
  default: string;
  mobile: string;
}
interface Image {
  uri: string;
  scale: Scale[];
}

interface Scale {
  uri: string;
  secureuri: string;
  size: 'small' | 'slider' | 'medium' | 'gallery' | 'big';
}
interface Dates {
  display: string;
}

interface Type {
  key: string;
  value: string;
  weight: number;
}

interface Category {
  key: string;
  value: string;
  friendly_name: string;
  macrocategory_id: string;
  weight: number;
}

interface Feature {
  type: string;
  uri: string;
  label: string;
  values: Value[];
}

interface Value {
  key: string;
  value: string;
  weight?: number;
}

interface Advertiser {
  user_id: string;
  name: string;
  company: false;
  type?: number;
  shop_id?: number;
  shop_name?: string;
  phone: string;
}

interface Geo {
  region: Region;
  city: City;
  town: Town;
  uri: string;
  label: string;
  type: string;
  map?: Map;
}

interface Map {
  address: string;
  latitudine: string;
  longitudine: string;
  zoom: string;
}

interface Region {
  key: string;
  uri: string;
  value: string;
  friendly_name: string;
  label: string;
  level: number;
  neighbors: string;
}

interface City {
  key: string;
  uri: string;
  value: string;
  label: string;
  friendly_name: string;
  short_name: string;
  level: number;
  istat: string;
  region_id: string;
}

interface Town {
  key: string;
  uri: string;
  value: string;
  label: string;
  level: number;
  istat: string;
  region_id: string;
  city_id: string;
  has_zone: boolean;
  friendly_name: string;
}
