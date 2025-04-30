import { Component } from '@angular/core'
import { invoiceHistory } from '../../data'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'

@Component({
  selector: 'earnings-invoice-history',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    NgbDropdownModule,
    CommonModule,
    NgbTooltipModule,
    NgbPaginationModule,
  ],
  templateUrl: './invoice-history.component.html',
  styles: ``,
})
export class InvoiceHistoryComponent {
  page = 1
  invoiceHistoryData = invoiceHistory
  currencyType = currency
}
