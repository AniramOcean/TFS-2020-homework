import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card.component';
import {AddCardModule} from './add-card/add-card.module';
import {CardsListModule} from './cards-list/cards-list.module';

@NgModule({
  declarations: [CardComponent],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    AddCardModule,
    CardsListModule,
  ]
})
export class CardModule { }
