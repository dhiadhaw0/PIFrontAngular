import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWalletComponent } from 'src/app/views/wallet/add/add.component'; // Chemin relatif corrigé
import { HomeComponent } from './home/home.component'; // Ajoutez aussi HomeComponent

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: { title: 'Wallet Dashboard' }
  },
  {
    path: 'add',
    component: AddWalletComponent,
    data: { title: 'Create New Wallet' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }