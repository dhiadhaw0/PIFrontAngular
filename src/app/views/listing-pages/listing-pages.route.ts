import { Route } from '@angular/router'
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component'
import { CompareListingComponent } from './compare-listing/compare-listing.component'
import { OfferDetailComponent } from './offer-detail/offer-detail.component'

export const LISTING_PAGES_ROUTES: Route[] = [
  {
    path: 'booking-confirmed',
    component: BookingConfirmedComponent,
    data: { title: 'Booking Confirmed' },
  },
  {
    path: 'compare-listing',
    component: CompareListingComponent,
    data: { title: 'Compare Listing' },
  },
  {
    path: 'offer-detail',
    component: OfferDetailComponent,
    data: { title: 'Offer Detail' },
  },
]
