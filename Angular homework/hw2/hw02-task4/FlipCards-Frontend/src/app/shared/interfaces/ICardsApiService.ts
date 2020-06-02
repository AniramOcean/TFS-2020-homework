import {Card} from './CardInterface';
import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export const ICardsApiServiceToken = new InjectionToken('ICardsApiService');

export interface ICardsApiService {
  getAll(): Observable<Card[]>;

  add(entity: Card): Observable<void>;

  delete(id: number): Observable<void>;
}
