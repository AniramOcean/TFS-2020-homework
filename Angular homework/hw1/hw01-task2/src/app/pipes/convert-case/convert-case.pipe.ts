import { Pipe, PipeTransform } from '@angular/core';

export enum ConvertCaseType {
  UpperCase = 'upper',
  LowerCase = 'lower',
  TitleCase = 'title'
}

@Pipe({
  name: 'convertCase'
})
export class ConvertCasePipe implements PipeTransform {
  transform(value: string, type?: ConvertCaseType): string {

    switch (type) {
      case ConvertCaseType.UpperCase:
        return value.toUpperCase();

      case ConvertCaseType.LowerCase:
        return value.toLowerCase();

      case ConvertCaseType.TitleCase:
        return value.split(' ').map(cur => cur[0].toUpperCase() + cur.slice(1)).join(' ');

      default:
          return value;
    }
  }
}
