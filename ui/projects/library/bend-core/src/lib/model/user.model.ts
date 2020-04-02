import {IAuthority} from './authority.model';
import {BaseModel, IBaseModel} from './base-model';


export interface IUser extends IBaseModel {
  username?: string;
  email?: string;
  fullName?: string;
  password?: string;
  authorities?: IAuthority[];
}

export class User extends BaseModel implements IUser {
}
