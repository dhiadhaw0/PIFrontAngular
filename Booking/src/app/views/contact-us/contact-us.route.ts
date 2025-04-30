import { Route } from '@angular/router'
import { ContactComponent } from './contact/contact.component'
import { Contact2Component } from './contact-2/contact-2.component'

export const CONTACT_US_ROUTES: Route[] = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us' },
  },
  {
    path: 'contact-2',
    component: Contact2Component,
    data: { title: 'Contact Us 2' },
  },
]
