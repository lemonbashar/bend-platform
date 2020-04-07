import {BendResponse} from './bend-response.model';

export class DataResponse<DataType> extends BendResponse {
  public data: DataType;
}

export class PageableDataResponse<Data> extends DataResponse<Data> {
  totalPages: number;
  totalElements: number;
}
