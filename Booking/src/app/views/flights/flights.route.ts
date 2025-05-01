import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { BookingComponent } from './booking/booking.component'

export const FLIGHT_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Flight - Home' } },
  { path: 'list', component: ListComponent, data: { title: 'Flight - List' } },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Flight - Detail' },
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Flight - Booking' },
  },
]
