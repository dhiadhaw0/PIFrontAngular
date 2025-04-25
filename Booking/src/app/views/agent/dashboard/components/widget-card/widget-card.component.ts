import { Component } from '@angular/core'
import { statistics } from '../../data'

@Component({
  selector: 'dashboard-widget-card',
  standalone: true,
  imports: [],
  templateUrl: './widget-card.component.html',
  styles: ``,
})
export class WidgetCardComponent {
  allStatisticData = statistics
}
