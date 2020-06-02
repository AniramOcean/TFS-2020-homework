import {Component, OnInit} from '@angular/core';
import {Card} from '../../../shared/interfaces/CardInterface';
import {CardsService} from '../cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  currentIndex = -1;
  isCardsFlipped = false;

  constructor(private cardsService: CardsService) { }

  get cards(): Card[] {
    return this.cardsService.getCards;
  }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  onFlipClick(index: number) {
    this.currentIndex = this.currentIndex === index
    ? -1
    : index;
  }

  onCardDelete(index: number) {
    this.cardsService.deleteCard(index);
  }

}
