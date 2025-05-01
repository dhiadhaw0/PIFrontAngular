import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { BookingComponent } from './booking'

export const CREDIT_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Credit - Home' } },
  { path: 'booking', component: BookingComponent, data: { title: 'Credit - Application' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
] 