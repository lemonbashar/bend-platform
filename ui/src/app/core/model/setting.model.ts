import {BaseModel, IBaseModel} from 'bend-core';

export interface ISetting extends IBaseModel {
  settingKey?: string;
  settingValue?: string;
  dataType?: string;
}

export class Setting extends BaseModel implements ISetting {
}

export interface IMiscellaneousSetup extends IBaseModel {
  typeName?: string;
  typeValue?: string;
  title?: string;
}

export class MiscellaneousSetup extends BaseModel implements IMiscellaneousSetup {
}
