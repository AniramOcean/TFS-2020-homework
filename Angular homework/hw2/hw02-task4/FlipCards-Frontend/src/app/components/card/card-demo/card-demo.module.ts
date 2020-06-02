import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CardDemoComponent} from './card-demo.component';
import { AddCardModule } from '../add-card/add-card.module';

@NgModule({
  declarations: [CardDemoComponent],
  exports: [
    CardDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddCardModule,
  ]
})
export class CardDemoModule { }
