import { Component } from '@angular/core'
import { statisticData } from '../../data'

@Component({
  selector: 'admin-dashboard-widget-dahboard',
  standalone: true,
  imports: [],
  templateUrl: './widget-dahboard.component.html',
  styles: ``,
})
export class WidgetDahboardComponent {
  statisticData = statisticData
}
