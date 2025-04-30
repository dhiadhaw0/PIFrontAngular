import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailComponent } from './detail/detail.component'

export const DIRECTORIES_ROUTES: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Directories  - Home' },
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Directories  - Detail' },
  },
]
