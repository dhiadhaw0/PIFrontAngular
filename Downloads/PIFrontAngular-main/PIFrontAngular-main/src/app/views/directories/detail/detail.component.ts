import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { TabComponent } from './components/tab/tab.component'
import { Footer2Component } from './components/footer2/footer2.component'

@Component({
  selector: 'directories-detail',
  standalone: true,
  imports: [TopbarComponent, HeroComponent, TabComponent, Footer2Component],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
