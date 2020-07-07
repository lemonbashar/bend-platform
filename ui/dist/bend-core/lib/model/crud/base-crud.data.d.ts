import { BaseData } from '../base-data';
export declare class BaseCrudData extends BaseData {
    lastChangedDate: Date;
    lastChangedBy: string;
}
export declare class BaseCrudViewData extends BaseData {
    primary: string;
    secondary: string;
}
