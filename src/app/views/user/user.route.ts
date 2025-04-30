import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { BookingsComponent } from './bookings/bookings.component'
import { SettingsComponent } from './settings/settings.component'
import { TravelersComponent } from './travelers/travelers.component'
import { WishlistComponent } from './wishlist/wishlist.component'
import { PaymentDetailsComponent } from './payment-details/payment-details.component'
import { DeleteProfileComponent } from './delete-profile/delete-profile.component'

export const USER_PAGES_ROUTES: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'User - Profile' },
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: { title: 'User - Bookings' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'User - Settings' },
  },
  {
    path: 'travelers',
    component: TravelersComponent,
    data: { title: 'User - Travelers' },
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: { title: 'User - Wishlist' },
  },
  {
    path: 'payment-details',
    component: PaymentDetailsComponent,
    data: { title: 'User - Payment Details' },
  },
  {
    path: 'delete-profile',
    component: DeleteProfileComponent,
    data: { title: 'User - Delete Profile' },
  },
]
