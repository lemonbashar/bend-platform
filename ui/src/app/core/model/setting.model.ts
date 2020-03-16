import {AbstractAudit, IAbstractAudit} from './abstract-audit.model';

export interface ISetting extends IAbstractAudit {
  id?: number;
  settingKey?: string;
  settingValue?: string;
  dataType?: string;
}

export class Setting extends AbstractAudit implements ISetting {
  constructor(
    public id?: number,
    public settingKey?: string,
    public settingValue?: string,
    public dataType?: string
  ) {
    super();
  }
}

export interface IMiscellaneousSetup extends IAbstractAudit {
  id?: number;
  typeName?: string;
  typeValue?: string;
  title?: string;
}

export class MiscellaneousSetup extends AbstractAudit implements IMiscellaneousSetup {
  constructor(
    public id?: number,
    public typeName?: string,
    public typeValue?: string,
    public title?: string
  ) {
    super();
  }
}
