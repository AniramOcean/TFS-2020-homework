import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    const hide = value.slice(-8, -4);

    return (
      hide.replace(/./g, '*') +
      value.slice(-4)
    );
  }
}
