import { Route } from '@angular/router'
import { PricingComponent } from './pricing/pricing.component'
import { FaqsComponent } from './faqs/faqs.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ComingSoonComponent } from './coming-soon/coming-soon.component'

export const OTHER_PAGES_ROUTES: Route[] = [
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing' } },
  { path: 'faqs', component: FaqsComponent, data: { title: 'FAQs' } },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { title: 'Not Found' },
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
    data: { title: 'Coming Soon' },
  },
]
