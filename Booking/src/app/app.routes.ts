import { Routes } from '@angular/router'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component'
import { HelpLayoutComponent } from './layouts/help-layout/help-layout.component'
import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { AboutComponent } from './views/about-us/about/about.component'
import { AuthGuard } from './core/guards'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotels/home',
    pathMatch: 'full',
  },
  {
    path: 'hotels',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/hotels/hotels.route').then((mod) => mod.HOTEL_ROUTES),
  },
  {
    path: 'flights',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/flights/flights.route').then((mod) => mod.FLIGHT_ROUTES),
  },
  {
    path: 'tours',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/tours/tours.route').then((mod) => mod.TOURS_ROUTES),
  },
  {
    path: 'cabs',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/cabs/cabs.route').then((mod) => mod.CABS_ROUTES),
  },
  {
    path: 'directories',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/directories/directories.route').then(
        (mod) => mod.DIRECTORIES_ROUTES
      ),
  },
  {
    path: 'listings',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/listings/listings.route').then(
        (mod) => mod.LISTINGS_ROUTES
      ),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/listing-pages/listing-pages.route').then(
        (mod) => mod.LISTING_PAGES_ROUTES
      ),
  },
  {
    path: 'heroes',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/heroes/heroes.route').then((mod) => mod.HEROES_ROUTES),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserLayoutComponent,
    loadChildren: () =>
      import('./views/user/user.route').then((mod) => mod.USER_PAGES_ROUTES),
  },
  {
    path: 'help',
    component: HelpLayoutComponent,
    loadChildren: () =>
      import('./views/help/help.route').then((mod) => mod.HELP_ROUTES),
  },
  {
    path: 'agent',
    canActivate: [AuthGuard],
    component: AgentLayoutComponent,
    loadChildren: () =>
      import('./views/agent/agent.route').then((mod) => mod.AGENT_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./views/admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/about-us/about-us.route').then(
        (mod) => mod.ABOUT_US_ROUTES
      ),
  },
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/contact-us/contact-us.route').then(
        (mod) => mod.CONTACT_US_ROUTES
      ),
  },
  {
    path: 'blogs',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/blogs/blogs.route').then((mod) => mod.BLOGS_ROUTES),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/other-pages/other-pages.route').then(
        (mod) => mod.OTHER_PAGES_ROUTES
      ),
  },
]
