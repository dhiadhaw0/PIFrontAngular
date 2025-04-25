import { Component } from '@angular/core'
import { EarningCardsComponent } from './components/earning-cards/earning-cards.component'
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component'

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [EarningCardsComponent, PaymentHistoryComponent],
  templateUrl: './earnings.component.html',
  styles: ``,
})
export class EarningsComponent {}
