import {ICardsApiService} from '../interfaces/ICardsApiService';
import {Card} from '../interfaces/CardInterface';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const host = 'http://localhost:3000';

@Injectable()
export class CardsApiService implements ICardsApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(entity: Card): Observable<void> {
    return this.httpClient.post<void>(`${host}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${host}`);
  }
}
