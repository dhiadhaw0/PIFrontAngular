import { Component } from '@angular/core'
import { roomBookingList } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'listing-list',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  templateUrl: './listing-list.component.html',
  styles: ``,
})
export class ListingListComponent {
  allRoomBookingList = roomBookingList
  currencyType = currency
}
