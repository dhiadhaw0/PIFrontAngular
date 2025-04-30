import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { paymentCards } from './data'

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [NgxMaskDirective, NgbDropdownModule],
  templateUrl: './payment-details.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class PaymentDetailsComponent {
  paymentCards = paymentCards
}
