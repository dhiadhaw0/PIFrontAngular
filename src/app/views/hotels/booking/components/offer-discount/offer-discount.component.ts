import { currency } from '@/app/store'
import { Component } from '@angular/core'

@Component({
  selector: 'booking-offer-discount',
  standalone: true,
  imports: [],
  templateUrl: './offer-discount.component.html',
  styles: ``,
})
export class OfferDiscountComponent {
  currencyType = currency
}
