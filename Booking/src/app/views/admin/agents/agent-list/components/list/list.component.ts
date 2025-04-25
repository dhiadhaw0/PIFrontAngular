import { Component } from '@angular/core'
import { agentsList } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'admin-agent-list',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  agentsListData = agentsList
}
