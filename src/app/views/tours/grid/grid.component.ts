import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { TourGridCardComponent } from './components/tour-grid-card/tour-grid-card.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    TourGridCardComponent,
    Footer1Component,
  ],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {}
