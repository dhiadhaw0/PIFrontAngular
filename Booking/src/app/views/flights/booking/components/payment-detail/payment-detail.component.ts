import { Component } from '@angular/core'
import { YourBookingComponent } from '../your-booking/your-booking.component'
import { FareSummaryComponent } from '../fare-summary/fare-summary.component'

@Component({
  selector: 'booking-payment-detail',
  standalone: true,
  imports: [YourBookingComponent, FareSummaryComponent],
  templateUrl: './payment-detail.component.html',
  styles: ``,
})
export class PaymentDetailComponent {}
