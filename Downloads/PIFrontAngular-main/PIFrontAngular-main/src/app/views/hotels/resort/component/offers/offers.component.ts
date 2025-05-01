import { Component } from '@angular/core'
import { monthlyOffers } from '../../data'

@Component({
  selector: 'resort-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styles: ``,
})
export class OffersComponent {
  offerList = monthlyOffers
}
