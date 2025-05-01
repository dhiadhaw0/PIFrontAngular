import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'earning-cards',
  standalone: true,
  imports: [NgbDropdownModule, NgbPopoverModule],
  templateUrl: './earning-cards.component.html',
  styles: ``,
})
export class EarningCardsComponent {
  currencyType = currency
}
