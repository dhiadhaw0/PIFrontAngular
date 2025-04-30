import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { BookingComponent } from './components/booking/booking.component'
import { CancellationComponent } from './components/cancellation/cancellation.component'
import { PaymentComponent } from './components/payment/payment.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    ActionboxComponent,
    BookingComponent,
    CancellationComponent,
    PaymentComponent,
    Footer1Component,
  ],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {}
