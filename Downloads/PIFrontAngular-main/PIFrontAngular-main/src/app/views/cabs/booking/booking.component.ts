import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { SummaryComponent } from './components/summary/summary.component'
import { PaymentComponent } from './components/payment/payment.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    TopbarComponent,
    SummaryComponent,
    PaymentComponent,
    FooterComponent,
  ],
  templateUrl: './booking.component.html',
  styles: ``,
})
export class BookingComponent {}
