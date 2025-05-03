import { Component } from '@angular/core'
import { statisticsData } from '../../data'

@Component({
  selector: 'app-agent-widget-card',
  standalone: true,
  imports: [],
  templateUrl: './agent-widget-card.component.html',
  styles: ``,
})
export class AgentWidgetCardComponent {
  statisticsData = statisticsData
}
