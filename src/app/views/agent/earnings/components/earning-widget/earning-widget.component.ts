import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'earning-widget',
  standalone: true,
  imports: [NgbDropdownModule, NgbPopoverModule],
  templateUrl: './earning-widget.component.html',
  styles: ``,
})
export class EarningWidgetComponent {
  currencyType = currency
}
