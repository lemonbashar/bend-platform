import {BaseModel, IBaseModel} from './base-model';

export interface IAuthority extends IBaseModel {
  name: string;
}

export class Authority extends BaseModel implements IAuthority {
  constructor(
    public name: string
  ) {
    super();
  }
}
