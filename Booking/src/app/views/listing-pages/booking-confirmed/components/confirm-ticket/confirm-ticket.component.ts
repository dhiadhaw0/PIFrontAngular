import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'booking-confirm-ticket',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './confirm-ticket.component.html',
  styles: ``,
})
export class ConfirmTicketComponent {
  currencyType = currency
}
