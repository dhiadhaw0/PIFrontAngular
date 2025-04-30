import { Component } from '@angular/core'
import { bookingDetailList } from '../../data'
import { CommonModule } from '@angular/common'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'

@Component({
  selector: 'app-detail-table',
  standalone: true,
  imports: [CommonModule, SelectFormInputDirective, NgbPaginationModule],
  templateUrl: './detail-table.component.html',
  styles: ``,
})
export class DetailTableComponent {
  bookingDetailList = bookingDetailList
  currencyType = currency
}
