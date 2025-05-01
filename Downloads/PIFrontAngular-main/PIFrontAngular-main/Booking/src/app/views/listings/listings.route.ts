import { Route } from '@angular/router'
import { AddComponent } from './add/add.component'
import { JoinUsComponent } from './join-us/join-us.component'
import { AddMinimalComponent } from './add-minimal/add-minimal.component'
import { AddedComponent } from './added/added.component'

export const LISTINGS_ROUTES: Route[] = [
  {
    path: 'join-us',
    component: JoinUsComponent,
    data: { title: 'Listings - Join Us' },
  },
  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Listings - Add Listing' },
  },
  {
    path: 'add-minimal',
    component: AddMinimalComponent,
    data: { title: 'Listings - Add Listing Minimal' },
  },
  {
    path: 'added',
    component: AddedComponent,
    data: { title: 'Listings - Added' },
  },
]
