import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-customer-review',
  standalone: true,
  imports: [SelectFormInputDirective, NgbProgressbarModule],
  templateUrl: './customer-review.component.html',
  styles: `
    :host(detail-customer-review) {
      display: contents !important;
    }
  `,
})
export class CustomerReviewComponent {}
