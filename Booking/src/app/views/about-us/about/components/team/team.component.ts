import { Component } from '@angular/core'
import { ourTeams } from '../../data'

@Component({
  selector: 'about-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styles: ``,
})
export class TeamComponent {
  teamList = ourTeams
}
