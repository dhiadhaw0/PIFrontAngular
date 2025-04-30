import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { ContentComponent } from './components/content/content.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [TopbarComponent, HeroComponent, ContentComponent, Footer1Component],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
