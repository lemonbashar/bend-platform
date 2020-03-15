import {IAuthority} from './authority.model';
import {AbstractAudit, IAbstractAudit} from './abstract-audit.model';


export interface IUser extends IAbstractAudit {
  id: number;
  username?: string;
  email?: string;
  fullName?: string;
  password?: string;
  authorities?: IAuthority[];
}

export class User extends AbstractAudit implements IUser {
  public password?: string;
  constructor(
    public id: number,
    public username?: string,
    public email?: string,
    public fullName?: string,
    public authorities?: IAuthority[]
  ) {
    super();
  }
}
