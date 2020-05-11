import {RouteUtil} from '../util/route.util';
import {AuthoritiesConstants} from 'bend-core';

export class BendBaseComponent {
  authoritiesConstants = new AuthoritiesConstants();

  makeRouteStartFromThis(route: string): string {
    return RouteUtil.startFromThis(route);
  }

  get authorities(): any {
    return this.authoritiesConstants;
  }
}
