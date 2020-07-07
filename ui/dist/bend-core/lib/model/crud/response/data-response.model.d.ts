import { BendResponse } from './bend-response.model';
export declare class DataResponse<DataType> extends BendResponse {
    data: DataType;
}
export declare class PageableDataResponse<Data> extends DataResponse<Data> {
    totalPages: number;
    totalElements: number;
}
