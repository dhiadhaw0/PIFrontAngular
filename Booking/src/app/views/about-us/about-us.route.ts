import { Route } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { OurTeamComponent } from './our-team/our-team.component'

export const ABOUT_US_ROUTES: Route[] = [
  { path: 'about', component: AboutComponent, data: { title: 'About us' } },
  {
    path: 'our-team',
    component: OurTeamComponent,
    data: { title: 'Our Team' },
  },
]
