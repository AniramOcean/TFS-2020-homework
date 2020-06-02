import {Inject, Injectable} from '@angular/core';
import {Card} from '../../shared/interfaces/CardInterface';
import {ICardsApiService, ICardsApiServiceToken} from '../../shared/interfaces/ICardsApiService';

@Injectable()
export class CardsService {

  public cards: Card[] = [];

  constructor(
    @Inject(ICardsApiServiceToken)
    private cardsApiService: ICardsApiService
  ) {}

  get getCards(): Card[] {
    return this.cards;
  }

  initialize() {
    this.cardsApiService.getAll()
      .subscribe(data => {
        this.setCards(data);
      });
  }


  setCards(card: Card[]) {
    this.cards = card;
  }

  addCard(card: Card) {
    this.cardsApiService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  deleteCard(index: number) {
    const id = this.cards[index].id;

    this.cardsApiService.delete(id).subscribe(() => {
      this.initialize();
    });
  }
}
