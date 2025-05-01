import { Route } from '@angular/router'
import { CenterComponent } from './center/center.component'
import { DetailComponent } from './detail/detail.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import { ServiceComponent } from './service/service.component'

export const HELP_ROUTES: Route[] = [
  {
    path: 'center',
    component: CenterComponent,
    data: { title: 'Help Center' },
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Help Detail' },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy' },
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'Terms of Service' },
  },
]
