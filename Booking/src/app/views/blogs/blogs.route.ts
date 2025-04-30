import { Route } from '@angular/router'
import { BlogComponent } from './blog/blog.component'
import { DetailComponent } from './detail/detail.component'
// import { HomeComponent } from './home/home.component'

export const BLOGS_ROUTES: Route[] = [
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  {
    path: 'detail',
    component: DetailComponent,
    data: { title: 'Blog Details' },
  },
]
