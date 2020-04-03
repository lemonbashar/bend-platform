import {BendResponse} from './bend-response.model';

export class DataResponse<DataType> extends BendResponse {
  public data: DataType;
}
