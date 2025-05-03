import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [TopbarComponent, PaymentDetailComponent, Footer1Component],
  templateUrl: './booking.component.html',
  styles: ``,
})
export class BookingComponent {}
