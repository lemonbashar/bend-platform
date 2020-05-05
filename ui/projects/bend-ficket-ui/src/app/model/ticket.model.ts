import {Time} from '@angular/common';
import {Place} from 'bend-core-ui';
import {BaseCrudData, UserCrudData} from 'bend-core';

export enum CarType {
  BUS,
  AC_BUS,
  TRUCK
}

export class TravelAgency extends BaseCrudData {
}

export class RideConfig extends BaseCrudData {
  name: string;
  description: string;
  startTime: Time;
  fromPlace: Place;
  reachTime: Time;
  toPlace: Place;
  timeFactor: Time;
}

export class SeatConfig extends BaseCrudData {
}

export class CarConfig extends BaseCrudData {
  ticketPrice: number;
  rideConfigs: RideConfig[];
  totalSeat: number;
  seatConfig: SeatConfig;
}

export class Car extends BaseCrudData {
  name: string;
  licence: string;
  numberPlate: string;
  carType: CarType;
  travelAgency: TravelAgency;
  carConfig: CarConfig;
}

export class Ticket extends BaseCrudData {
  rideDate: Date;
  buyPrice: number;
  seatNumber: number;
  rideConfig: RideConfig;
  car: Car;
  buyer: UserCrudData;
}
