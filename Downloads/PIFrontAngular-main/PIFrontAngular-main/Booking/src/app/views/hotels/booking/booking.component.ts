import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { InformationComponent } from './components/information/information.component'
import { GuestdetailComponent } from './components/guestdetail/guestdetail.component'
import { PaymentOptionComponent } from './components/payment-option/payment-option.component'
import { PriceSummaryComponent } from './components/price-summary/price-summary.component'
import { OfferDiscountComponent } from './components/offer-discount/offer-discount.component'
import { LoginAdvantageComponent } from './components/login-advantage/login-advantage.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbComponent,
    InformationComponent,
    GuestdetailComponent,
    PaymentOptionComponent,
    PriceSummaryComponent,
    OfferDiscountComponent,
    LoginAdvantageComponent,
    FooterComponent,
  ],
  templateUrl: './booking.component.html',
  styles: ``,
})
export class BookingComponent {}
