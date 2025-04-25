import { Component } from '@angular/core'
import { popularHotels } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'admin-dashboard-popular-hotel',
  standalone: true,
  imports: [NgbDropdownModule, RouterLink],
  templateUrl: './popular-hotel.component.html',
  styles: ``,
})
export class PopularHotelComponent {
  allPopularHotels = popularHotels
  currencyType = currency
}
