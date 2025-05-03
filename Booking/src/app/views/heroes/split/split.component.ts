import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-split',
  standalone: true,
  imports: [TopbarComponent, HeroComponent, Footer1Component],
  templateUrl: './split.component.html',
  styles: ``,
})
export class SplitComponent {}
