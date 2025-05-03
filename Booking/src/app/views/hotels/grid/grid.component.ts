import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { FilterTabComponent } from './components/filter-tab/filter-tab.component'
import { GridlistComponent } from './components/gridlist/gridlist.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    FilterTabComponent,
    GridlistComponent,
    Footer1Component,
  ],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {}
