import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { BookingComponent } from './booking/booking.component'

export const CABS_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Cab - Home' } },
  { path: 'list', component: ListComponent, data: { title: 'Cab - List' } },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Cab - Detail' },
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Cab - Booking' },
  },
]
