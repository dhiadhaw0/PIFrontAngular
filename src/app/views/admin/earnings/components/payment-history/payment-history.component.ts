import { Component } from '@angular/core'
import { paymentHistory } from '../../data'
import { CommonModule } from '@angular/common'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'

@Component({
  selector: 'earnings-payment-history',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbPaginationModule],
  templateUrl: './payment-history.component.html',
  styles: ``,
})
export class PaymentHistoryComponent {
  paymentHistoryData = paymentHistory
  currencyType = currency
}
