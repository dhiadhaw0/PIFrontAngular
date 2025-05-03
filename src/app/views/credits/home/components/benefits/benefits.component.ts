import { Component } from '@angular/core'

@Component({
  selector: 'credits-home-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styles: ``,
})
export class BenefitsComponent {
  benefits = [
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Quick Approval',
      description: 'Get your credit approved within 24 hours with minimal documentation'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Secure Process',
      description: 'Your data is protected with bank-level security measures'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Flexible Terms',
      description: 'Choose repayment terms that match your business cash flow'
    },
    {
      icon: 'bi bi-headset',
      title: '24/7 Support',
      description: 'Access to dedicated support team for all your queries'
    }
  ]
} 