import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../shared/interfaces/CardInterface';
import {CardsService} from './cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  get cards(): Card[] {
    return this.cardsService.getCards;
  }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  onAdd(card: Card) {
    this.cardsService.addCard(card);
  }
}
