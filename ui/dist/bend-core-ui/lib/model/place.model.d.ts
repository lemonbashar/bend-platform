import { BaseData } from 'bend-core';
export declare class GsmLocation extends BaseData {
    latitude: number;
    longitude: number;
    aptitude: number;
}
export declare class Division extends BaseData {
    name: string;
}
export declare class District extends BaseData {
    name: string;
    division: Division;
}
export declare class Thana extends BaseData {
    name: string;
    district: District;
}
export declare class Place extends BaseData {
    name: string;
    thana: Thana;
    location: GsmLocation;
}
