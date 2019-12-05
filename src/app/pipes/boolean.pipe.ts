import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value:boolean , ...args: any[]): any {
    if (value) return "Descatalogado"
    else return "";
  }

}
