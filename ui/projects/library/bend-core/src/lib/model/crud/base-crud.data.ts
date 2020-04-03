import {BaseData} from '../base-data';

export class BaseCrudData extends BaseData {
  lastChangedDate: Date;
  lastChangedBy: string;
}

export class BaseCrudViewData extends BaseData {
  primary: string;
  secondary: string;
}
