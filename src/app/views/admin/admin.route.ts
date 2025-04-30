import { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ListComponent } from './bookings/list/list.component'
import { DetailComponent } from './bookings/detail/detail.component'
import { ListsComponent } from './guests/list/list.component'
import { DetailsComponent } from './guests/detail/detail.component'
import { AgentListComponent } from './agents/agent-list/agent-list.component'
import { AgentDetailComponent } from './agents/agent-detail/agent-detail.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { EarningsComponent } from './earnings/earnings.component'
import { SettingsComponent } from './settings/settings.component'

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Admin Dashboard' },
  },
  {
    path: 'bookings/list',
    component: ListComponent,
    data: { title: 'Admin Booking List' },
  },
  {
    path: 'bookings/detail',
    component: DetailComponent,
    data: { title: 'Admin Booking Detail' },
  },
  {
    path: 'guests/list',
    component: ListsComponent,
    data: { title: 'Admin Guests List' },
  },
  {
    path: 'guests/detail',
    component: DetailsComponent,
    data: { title: 'Admin Guests Detail' },
  },
  {
    path: 'agents/list',
    component: AgentListComponent,
    data: { title: 'Admin Agents List' },
  },
  {
    path: 'agents/detail',
    component: AgentDetailComponent,
    data: { title: 'Admin Agents Detail' },
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    data: { title: 'Admin Reviews' },
  },
  {
    path: 'earnings',
    component: EarningsComponent,
    data: { title: 'Admin Earnings' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Admin Settings' },
  },
]
