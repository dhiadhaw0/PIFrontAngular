import { Component } from '@angular/core'
import { upcomingBookings } from '../../data'
import { CommonModule } from '@angular/common'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'dashboard-upcoming-booking',
  standalone: true,
  imports: [CommonModule, SelectFormInputDirective, NgbPaginationModule],
  templateUrl: './upcoming-booking.component.html',
  styles: ``,
})
export class UpcomingBookingComponent {
  page = 2
  upcomingBookingsData = upcomingBookings
}
