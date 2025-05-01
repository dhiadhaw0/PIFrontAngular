import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQrcodeModule } from '@techiediaries/ngx-qrcode';
import { WalletQrComponent } from './wallet-qr.component';

@NgModule({
  declarations: [WalletQrComponent],
  imports: [CommonModule, NgxQrcodeModule],
  exports: [WalletQrComponent]
})
export class WalletQrModule {} 