import {DataResponse} from './data-response.model';

export class ExtraResponse<ExtraDataType, DataType> extends DataResponse<DataType> {
  public extra: ExtraDataType;
}
