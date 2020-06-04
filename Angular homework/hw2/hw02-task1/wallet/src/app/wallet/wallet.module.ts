import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {PurchasePreviewModule} from './purchase-preview/purchase-preview.module';
import {PurchaseAddModule} from './purchase-add/purchase-add.module';
import {PurchasesService} from './purchases.service';
import {IPurchasesApiServiceToken} from '../shared/interfaces/IPurchasesApiService';
// import {PurchasesApiMockService} from '../shared/services/purchasesApiMock.service';
import {PurchasesApiService} from '../shared/services/purchasesApi.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {PurchaseInterceptor} from '../shared/interceptor/purchase.interceptor';

@NgModule({
    declarations: [WalletComponent],
    exports: [
        WalletComponent
    ],
  imports: [
    CommonModule,
    PurchasePreviewModule,
    PurchaseAddModule
  ],
  providers: [
    PurchasesService,
    // {provide: IPurchasesApiServiceToken, useClass: PurchasesApiMockService}
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService},
    {provide: HTTP_INTERCEPTORS, useClass: PurchaseInterceptor, multi: true}
  ]
})
export class WalletModule { }
