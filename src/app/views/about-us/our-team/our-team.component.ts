import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { TeamListComponent } from './components/team-list/team-list.component'
import { HeroComponent } from './components/hero/hero.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [
    TopbarComponent,
    TeamListComponent,
    HeroComponent,
    ActionboxComponent,
    Footer1Component,
  ],
  templateUrl: './our-team.component.html',
  styles: ``,
})
export class OurTeamComponent {}
