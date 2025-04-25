import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ChainComponent } from './chain/chain.component'
import { ResortComponent } from './resort/resort.component'
import { GridComponent } from './grid/grid.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { RoomDetailComponent } from './room-detail/room-detail.component'
import { BookingComponent } from './booking/booking.component'

export const HOTEL_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Hotel - Home' } },
  {
    path: 'chain',
    component: ChainComponent,
    data: { title: 'Hotel - Chain' },
  },
  {
    path: 'resort',
    component: ResortComponent,
    data: { title: 'Hotel - Resort' },
  },
  { path: 'grid', component: GridComponent, data: { title: 'Hotel - Grid' } },
  { path: 'list', component: ListComponent, data: { title: 'Hotel - List' } },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Hotel - Detail' },
  },
  {
    path: 'room-detail',
    component: RoomDetailComponent,
    data: { title: 'Hotel - Room Detail' },
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Hotel - Booking' },
  },
]
