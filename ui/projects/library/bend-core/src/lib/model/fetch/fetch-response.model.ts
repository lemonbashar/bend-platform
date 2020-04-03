
export enum FetchResponseType {
  SINGLE, LIST, MAP
}

export enum FetchResponseDataType {
  NUMBER, STRING
}
export class FetchResponse {
  key: string;
  fetchResponseType: FetchResponseType;
  fetchResponseDataType: FetchResponseDataType;
  data: any;
}
