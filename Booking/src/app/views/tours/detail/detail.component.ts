import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { DetailTabComponent } from './components/detail-tab/detail-tab.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    DetailTabComponent,
    Footer1Component,
  ],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
