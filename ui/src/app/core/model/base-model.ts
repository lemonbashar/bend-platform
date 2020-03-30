import {IUser} from './user.model';

export interface IBaseModel {
  id?: number | string;
  createBy?: IUser;
  updateBy?: IUser;
  createDate?: Date;
  updateDate?: Date;
  active?: boolean;

}

export class BaseModel implements IBaseModel {
  id?: number;
  createBy?: IUser;
  updateBy?: IUser;
  createDate?: Date;
  updateDate?: Date;
  active?: boolean;
}
