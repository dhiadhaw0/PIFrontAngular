import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddWalletComponent } from 'src/app/views/wallet/add/add.component';
import { WalletRoutingModule } from 'src/app/views/wallet/wallet-routing.module';

@NgModule({
  declarations: [AddWalletComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WalletRoutingModule
  ],
  exports: [AddWalletComponent]
})
export class WalletModule {}