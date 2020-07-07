export declare enum FetchResponseType {
    SINGLE = 0,
    LIST = 1,
    MAP = 2
}
export declare enum FetchResponseDataType {
    NUMBER = 0,
    STRING = 1
}
export declare class FetchResponse {
    key: string;
    fetchResponseType: FetchResponseType;
    fetchResponseDataType: FetchResponseDataType;
    data: any;
}
