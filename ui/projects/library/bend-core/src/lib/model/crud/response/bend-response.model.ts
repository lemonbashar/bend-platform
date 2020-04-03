import {BendStatus} from './bend-status.enum';

export class BendResponse {
  public status: BendStatus;
  public dataTypes: string[];
}
