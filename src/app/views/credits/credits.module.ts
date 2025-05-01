import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CREDIT_ROUTES } from './credits.route';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking';
import { ApplicationModule } from './application/application.module';

@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CREDIT_ROUTES),
    ApplicationModule
  ]
})
export class CreditsModule { } 