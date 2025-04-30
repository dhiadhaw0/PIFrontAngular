import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailComponent } from './detail/detail.component'
import { BookingComponent } from './booking/booking.component'

export const FLIGHT_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Digital Banking - Home' } },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Open Bank Account' },
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Digital Banking - Booking' },
  },
]
