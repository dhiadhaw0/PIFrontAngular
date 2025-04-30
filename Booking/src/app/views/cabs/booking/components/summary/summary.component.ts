import { currency } from '@/app/store'
import { Component } from '@angular/core'

@Component({
  selector: 'booking-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styles: ``,
})
export class SummaryComponent {
  currencyType = currency
}
