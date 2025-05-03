import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { OurStoryComponent } from './components/our-story/our-story.component'
import { TeamComponent } from './components/team/team.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    OurStoryComponent,
    TeamComponent,
    Footer1Component,
  ],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {}
