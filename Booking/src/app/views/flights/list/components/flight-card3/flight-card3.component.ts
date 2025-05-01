import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'list-flight-card3',
  standalone: true,
  imports: [NgbNavModule, NgbCollapseModule, RouterModule, CommonModule],
  templateUrl: './flight-card3.component.html',
  styles: ``,
})
export class FlightCard3Component {
  isCollapsed = true
  currencyType = currency
}
