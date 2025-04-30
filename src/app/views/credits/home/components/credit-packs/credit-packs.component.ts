import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'credits-home-credit-packs',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './credit-packs.component.html',
  styles: ``,
})
export class CreditPacksComponent {
  creditPacks = [
    {
      name: 'Starter Pack',
      amount: '10,000',
      interest: '5%',
      term: '12 months',
      features: ['Quick approval', 'Flexible repayment', 'No collateral required'],
      image: 'assets/images/element/credit-starter.svg'
    },
    {
      name: 'Growth Pack',
      amount: '50,000',
      interest: '4.5%',
      term: '24 months',
      features: ['Higher credit limit', 'Business advisory', 'Priority support'],
      image: 'assets/images/element/credit-growth.svg'
    },
    {
      name: 'Enterprise Pack',
      amount: '100,000',
      interest: '4%',
      term: '36 months',
      features: ['Custom solutions', 'Dedicated manager', 'Extended grace period'],
      image: 'assets/images/element/credit-enterprise.svg'
    }
  ]
} 