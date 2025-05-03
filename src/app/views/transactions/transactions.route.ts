import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TransactionFormComponent } from './form/transaction-form.component'

export const TRANSACTIONS_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: ':type',
    component: TransactionFormComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
] 