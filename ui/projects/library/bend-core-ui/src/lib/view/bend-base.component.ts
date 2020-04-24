import {RouteUtil} from '../util/route.util';

export class BendBaseComponent {
  makeRouteStartFromThis(route: string): string {
    return RouteUtil.startFromThis(route);
  }
}
