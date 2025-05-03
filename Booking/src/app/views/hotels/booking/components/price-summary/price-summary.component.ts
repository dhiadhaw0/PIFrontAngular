import { currency } from '@/app/store'
import { Component } from '@angular/core'

@Component({
  selector: 'booking-price-summary',
  standalone: true,
  imports: [],
  templateUrl: './price-summary.component.html',
  styles: ``,
})
export class PriceSummaryComponent {
  currencyType = currency
}
