import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddCardComponent} from './add-card.component';

@NgModule({
  declarations: [AddCardComponent],
  exports: [AddCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AddCardModule { }
