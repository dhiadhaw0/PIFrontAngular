import { Component } from '@angular/core'
import { benefits } from '../../data'

@Component({
  selector: 'join-us-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styles: ``,
})
export class BenefitsComponent {
  benefits = benefits
}
