import { DataResponse } from './data-response.model';
export declare class ExtraResponse<ExtraDataType, DataType> extends DataResponse<DataType> {
    extra: ExtraDataType;
}
