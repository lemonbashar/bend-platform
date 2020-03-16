import {AbstractAudit, IAbstractAudit} from './abstract-audit.model';

export interface IAuthority extends IAbstractAudit {
  name: string;
}

export class Authority extends AbstractAudit implements IAuthority {
  constructor(
    public name: string
  ) {
    super();
  }
}
