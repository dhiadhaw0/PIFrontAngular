import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { TravelersComponent } from './travelers/travelers.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'travelers',
    component: TravelersComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: 'bookings',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    BookingsComponent,
    TravelersComponent,
    WishlistComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { } 