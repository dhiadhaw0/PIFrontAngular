import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { CabDetailComponent } from './components/cab-detail/cab-detail.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    CabDetailComponent,
    Footer1Component,
  ],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
