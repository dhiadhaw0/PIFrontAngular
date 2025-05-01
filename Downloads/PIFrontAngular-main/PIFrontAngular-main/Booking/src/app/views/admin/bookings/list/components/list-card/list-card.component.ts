import { Component } from '@angular/core'
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { bookingLists } from '../../data'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'booking-list-card',
  standalone: true,
  imports: [
    NgbNavModule,
    NgbDropdownModule,
    NgbRatingModule,
    NgbPaginationModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './list-card.component.html',
  styles: ``,
})
export class ListCardComponent {
  page = 2
  bookingListsData = bookingLists
  activeButton: number = 1
  currencyType = currency
  showButton(index: number) {
    this.activeButton = index
  }
}
