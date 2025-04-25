import { Component } from '@angular/core'
import { bookings } from './data'
import { CommonModule } from '@angular/common'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, SelectFormInputDirective],
  templateUrl: './bookings.component.html',
  styles: ``,
})
export class BookingsComponent {
  page = 1
  bookingsData = bookings
}
