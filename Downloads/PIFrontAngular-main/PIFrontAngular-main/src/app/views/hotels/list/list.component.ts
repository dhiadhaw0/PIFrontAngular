import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { ListcardComponent } from './components/listcard/listcard.component'
import { FilterOffcanvasComponent } from './components/filter-offcanvas/filter-offcanvas.component'
import { FilterbarComponent } from './components/filterbar/filterbar.component'
import { Footer1Component } from './components/footer1/footer1.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    NgbAlertModule,
    ListcardComponent,
    FilterbarComponent,
    FilterOffcanvasComponent,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  staticAlertClosed = false
}
