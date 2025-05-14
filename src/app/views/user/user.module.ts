import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { TravelersComponent } from './travelers/travelers.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';


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
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TravelersComponent,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { } 