import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../interfaces/Purchase';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PurchasesApiMockService implements IPurchasesApiService{
  add(entity: Purchase): Observable<void> {
    return undefined;
  }

  edit(entity: Purchase): Observable<void> {
    return undefined;
  }

  delete(id: number): Observable<void> {
    return undefined;
  }

  getAll(): Observable<Purchase[]> {
    return of([
      {
        id: 1,
        title: 'Медицинские маски, антисептики',
        price: 1000,
        date: new Date(),
        comment: 'Убить вирус снаружи, карантин же'
      },
      {
        id: 2,
        title: 'Алкоголь',
        price: 10000,
        date: new Date(),
        comment: 'Убить вирус внутри, да и онлайн-бухич никто не отменял'
      },
      {
        id: 3,
        title: '10 мешков гречи',
        price: 5000,
        date: new Date(),
        comment: 'Акция в пятерочке'
      },
      {
        id: 4,
        title: 'Много банок тушенки',
        price: 10000,
        date: new Date(),
        comment: 'Мой лорд, провизия на исходе, люди бунтуют'
      }

  ]);
  }

}
