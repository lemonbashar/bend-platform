import {BaseData} from 'bend-core';

export class GsmLocation extends BaseData {
  latitude: number;
  longitude: number;
  aptitude: number;
}

export class Division extends BaseData {
  name: string;
}

export class District extends BaseData {
  name: string;
  division: Division;
}

export class Thana extends BaseData {
  name: string;
  district: District;
}

export class Place extends BaseData {
  name: string;
  thana: Thana;
  location: GsmLocation;
}
