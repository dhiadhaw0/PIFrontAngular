import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { PricingplansComponent } from './components/pricingplans/pricingplans.component'
import { PricingfaqsComponent } from './components/pricingfaqs/pricingfaqs.component'
import { ClientsComponent } from './components/clients/clients.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    TopbarComponent,
    PricingplansComponent,
    PricingfaqsComponent,
    ClientsComponent,
    ActionboxComponent,
    Footer1Component,
  ],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {}
