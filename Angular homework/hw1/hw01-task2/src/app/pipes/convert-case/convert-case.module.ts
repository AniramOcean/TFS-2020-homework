import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertCasePipe } from './convert-case.pipe';

@NgModule({
  declarations: [ ConvertCasePipe ],
  imports: [ CommonModule ],
  exports: [ ConvertCasePipe ]
})
export class ConvertCaseModule { }
