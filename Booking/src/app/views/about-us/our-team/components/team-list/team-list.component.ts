import { Component } from '@angular/core'
import { teamMembers } from '../../data'

@Component({
  selector: 'our-team-list',
  standalone: true,
  imports: [],
  templateUrl: './team-list.component.html',
  styles: ``,
})
export class TeamListComponent {
  memberList = teamMembers
}
