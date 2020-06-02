import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardsListComponent} from './cards-list.component';
import {CardDemoModule} from '../card-demo/card-demo.module';
import {CardsService} from '../cards.service';
import {ICardsApiServiceToken} from '../../../shared/interfaces/ICardsApiService';
import {CardsApiMockService} from '../../../shared/services/cardsApiMock.service';
import {CardsApiService} from '../../../shared/services/cardsApi.service';

@NgModule({
  declarations: [CardsListComponent],
  exports: [CardsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardDemoModule
  ],
  providers: [
    CardsService,
    // {provide: ICardsApiServiceToken, useClass: CardsApiMockService}
    {provide: ICardsApiServiceToken, useClass: CardsApiService}
  ]
})
export class CardsListModule { }
