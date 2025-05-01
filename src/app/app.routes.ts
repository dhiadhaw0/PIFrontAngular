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
    path: 'courses',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/courses/courses.route').then((mod) => mod.COURSE_ROUTES),
  },
  {
    path: 'reclamation',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/reclamation/reclamation.module').then((mod) => mod.ReclamationModule),
  },
  {
    path: 'transactions',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/transactions/transactions.route').then((mod) => mod.TRANSACTIONS_ROUTES),
  },
  {
    path: 'credits',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/credits/credits.route').then((mod) => mod.CREDIT_ROUTES),
  },
  {
    path: 'wallet',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/wallet/wallet.route').then((mod) => mod.WALLET_ROUTES),
  },
  {
    path: 'credits',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/credits/credits.route').then((mod) => mod.CREDIT_ROUTES),
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
    component: AgentLayoutComponent,
    loadChildren: () =>
      import('./views/agent/agent.route').then((mod) => mod.AGENT_ROUTES),
  },
  {
    path: 'admin',
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
  {
    path: 'wallet',
    children: [
      {
        path: 'home',
        loadComponent: () => import('./views/wallet/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'apply',
        loadComponent: () => import('./views/wallet/apply/apply.component').then(m => m.ApplyComponent)
      }
    ]
  }
]
