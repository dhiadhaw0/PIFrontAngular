import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'list-filterbar',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './filterbar.component.html',
  styles: ``,
})
export class FilterbarComponent {
  isCollapsed = true
  currencyType = currency
  amenitiesCollapsed = true
}
