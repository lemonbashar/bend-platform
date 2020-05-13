import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bendTranslate'
  })
export class BendTranslatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.toString() === 'test' ? 'Success' : value;
  }

}
