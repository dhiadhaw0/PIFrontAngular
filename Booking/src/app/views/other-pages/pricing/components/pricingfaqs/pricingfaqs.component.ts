import { Component } from '@angular/core'
import { pricingFAQs } from '../../data'

@Component({
  selector: 'pricing-faqs',
  standalone: true,
  imports: [],
  templateUrl: './pricingfaqs.component.html',
  styles: ``,
})
export class PricingfaqsComponent {
  faqList = pricingFAQs
}
