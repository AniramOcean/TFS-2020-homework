import {ICardsApiService} from '../interfaces/ICardsApiService';
import {Card} from '../interfaces/CardInterface';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CardsApiMockService implements ICardsApiService {
  add(entity: Card): Observable<void> {
    return undefined;
  }

  delete(id: number): Observable<void> {
    return undefined;
  }

  getAll(): Observable<Card[]> {
    return of([
      {title: 'Abra-Kadabra', description: 'Boom!', id: 1},
      {title: 'Title-2', description: 'Description-1', id: 2},
      {title: 'Title-3', description: 'Description-2', id: 3},
      {title: 'Title-4', description: 'Description-3', id: 4},
    ]);
  }
}
