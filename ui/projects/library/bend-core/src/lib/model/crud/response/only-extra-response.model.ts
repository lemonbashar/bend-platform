import {BendResponse} from './bend-response.model';

export class OnlyExtraResponse<ExtraDataType> extends BendResponse {
  public extra: ExtraDataType;
}
