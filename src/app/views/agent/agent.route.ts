import { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ListingsComponent } from './listings/listings.component'
import { BookingsComponent } from './bookings/bookings.component'
import { ActivitiesComponent } from './activities/activities.component'
import { EarningsComponent } from './earnings/earnings.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { SettingsComponent } from './settings/settings.component'
import { ListformationComponent } from './formations/listformation/listformation.component'
import { FormationformComponent } from './formations/formationform/formationform.component'

export const AGENT_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Agent - Dashboard' },
  },
  {
    path: 'formations',
    component: ListformationComponent,
    data: { title: 'Agent - Formations' },
  },
  {
    path: 'formations/add',
    component: FormationformComponent,
    data: { title: 'Agent - Add Formation' },
  },
  {
    path: 'formations/edit/:id',
    component: FormationformComponent,
    data: { title: 'Agent - Edit Formation' },
  },
  {
    path: 'listings',
    component: ListingsComponent,
    data: { title: 'Agent - Listings' },
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: { title: 'Agent - Booking' },
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
    data: { title: 'Agent - Activities' },
  },
  {
    path: 'earnings',
    component: EarningsComponent,
    data: { title: 'Agent - Earnings' },
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    data: { title: 'Agent - Review' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Agent - Settings' },
  },
 
]
