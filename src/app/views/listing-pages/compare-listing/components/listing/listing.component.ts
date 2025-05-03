import { Component } from '@angular/core'
import { compareListings } from '../../data'
import { currency } from '@/app/store'

@Component({
  selector: 'compare-listing',
  standalone: true,
  imports: [],
  templateUrl: './listing.component.html',
  styles: ``,
})
export class ListingComponent {
  compareListings = compareListings
  currencyType = currency
}
