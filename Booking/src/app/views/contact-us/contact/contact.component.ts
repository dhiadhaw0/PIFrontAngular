import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { AddressMapComponent } from './components/address-map/address-map.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    ContactFormComponent,
    AddressMapComponent,
    Footer1Component,
  ],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {}
