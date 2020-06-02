import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditCardDemoComponent } from './components/credit-card-demo/credit-card-demo.component';
import { ConvertCaseDemoComponent } from './components/convert-case-demo/convert-case-demo.component';

import {FormsModule} from '@angular/forms';
import {ConvertCaseModule} from './pipes/convert-case/convert-case.module';
import {CreditCardModule} from './pipes/credit-card/credit-card.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDemoComponent,
    ConvertCaseDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ConvertCaseModule,
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
