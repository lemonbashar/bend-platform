
export enum FetchResponseType {
  SINGLE, LIST, MAP
}

export enum FetchResponseDataType {
  NUMBER, STRING
}

export interface IFetchResponse {
  key: string;
  fetchResponseType: FetchResponseType;
  fetchResponseDataType: FetchResponseDataType;
  data: any;
}

export class FetchResponse implements IFetchResponse {
  public key: string;
  public fetchResponseType: FetchResponseType;
  public fetchResponseDataType: FetchResponseDataType;
  public data: any;

  constructor() {}
}
