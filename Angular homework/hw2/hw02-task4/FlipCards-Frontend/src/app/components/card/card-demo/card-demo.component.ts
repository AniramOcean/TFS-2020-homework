import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../shared/interfaces/CardInterface';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {

  @Input() card: Card;

  @Input() isCardFlipped = false;

  @Output() clicked = new EventEmitter<void>();

  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  flipSomeCards() {
    this.isCardFlipped = !this.isCardFlipped;
  }

  // onFlippedClick() {
  //   this.clicked.emit();
  // }

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.deleted.emit();
  }
}
