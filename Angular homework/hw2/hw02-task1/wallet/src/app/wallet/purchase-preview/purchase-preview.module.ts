import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePreviewComponent } from './purchase-preview.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PurchasePreviewComponent],
  exports: [PurchasePreviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PurchasePreviewModule { }
