import {IUser} from './user.model';

export interface IAbstractAudit {
  id?: number | string;
  createBy?: IUser;
  updateBy?: IUser;
  createDate?: Date;
  updateDate?: Date;
  active?: boolean;
}

export class AbstractAudit {
  public createBy?: IUser;
  public updateBy?: IUser;
  public createDate?: Date;
  public updateDate?: Date;
  public active?: boolean;
  constructor(
  ) {}
}
