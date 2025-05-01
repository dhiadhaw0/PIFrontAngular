import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const WALLET_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Wallet - Home' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
