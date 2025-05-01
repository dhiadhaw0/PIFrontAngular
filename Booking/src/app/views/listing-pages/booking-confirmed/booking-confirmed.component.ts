import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { ConfirmTicketComponent } from './components/confirm-ticket/confirm-ticket.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-booking-confirmed',
  standalone: true,
  imports: [TopbarComponent, ConfirmTicketComponent, Footer1Component],
  templateUrl: './booking-confirmed.component.html',
  styles: ``,
})
export class BookingConfirmedComponent {}
