import { Component } from '@angular/core'
import { pricingPlans } from '../../data'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'pricing-plans',
  standalone: true,
  imports: [NgbTooltipModule, CommonModule],
  templateUrl: './pricingplans.component.html',
  styles: ``,
})
export class PricingplansComponent {
  planList = pricingPlans
  paymentType = false

  changePaymentType(ev: any) {
    this.paymentType = ev.target.checked
  }
}
