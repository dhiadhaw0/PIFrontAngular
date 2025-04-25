import { Component } from '@angular/core'
import { AgentWidgetCardComponent } from './components/agent-widget-card/agent-widget-card.component'
import { AgentInfoComponent } from './components/agent-info/agent-info.component'
import { HotelListComponent } from './components/hotel-list/hotel-list.component'

@Component({
  selector: 'app-agent-detail',
  standalone: true,
  imports: [AgentWidgetCardComponent, AgentInfoComponent, HotelListComponent],
  templateUrl: './agent-detail.component.html',
  styles: ``,
})
export class AgentDetailComponent {}
