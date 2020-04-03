import {BaseData} from 'bend-core';
import {BaseCrudData} from 'bend-core';

export class Setting extends BaseCrudData {
  settingKey?: string;
  settingValue?: string;
  dataType?: string;
}
export class MiscellaneousSetup extends BaseCrudData {
  typeName?: string;
  typeValue?: string;
  title?: string;
}
