import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { GridComponent } from './grid/grid.component'
import { BookingComponent } from './booking/booking.component'
import { ProgressComponent } from './progress/progress.component'

export const TOURS_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Tour - Home' } },
  { path: 'grid', component: GridComponent, data: { title: 'Tour - Grid' } },
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Tour - Booking' },
  },
  {
    path: 'progress/:id',
    component: ProgressComponent,
    title: 'Course Progress',
  },
]
