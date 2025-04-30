import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { upcomingBookingData } from './data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [NgbNavModule, RouterModule],
  templateUrl: './bookings.component.html',
  styles: ``,
})
export class BookingsComponent {
  upcomingBookingData = upcomingBookingData
}
