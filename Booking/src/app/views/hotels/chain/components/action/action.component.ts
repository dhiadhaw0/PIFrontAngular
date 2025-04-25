import { currency } from '@/app/store'
import { Component } from '@angular/core'

@Component({
  selector: 'chain-action',
  standalone: true,
  imports: [],
  templateUrl: './action.component.html',
  styles: ``,
})
export class ActionComponent {
  currencyType = currency
}
