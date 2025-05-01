import { Component } from '@angular/core'
import { hotelsList } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './hotel-list.component.html',
  styles: ``,
})
export class HotelListComponent {
  hotelsList = hotelsList
  currencyType = currency
}
