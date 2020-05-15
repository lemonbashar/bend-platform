import {RouteUtil} from '../util/route.util';
import {AuthoritiesConstants} from 'bend-core';

export class BendBaseComponent {
  authoritiesConstants = new AuthoritiesConstants();
  today = new Date();

  makeRouteStartFromThis(route: string): string {
    return RouteUtil.startFromThis(route);
  }

  get authorities(): any {
    return this.authoritiesConstants;
  }
}
