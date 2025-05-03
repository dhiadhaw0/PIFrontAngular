import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { NoticeboardComponent } from './components/noticeboard/noticeboard.component'
import { FilterComponent } from './components/filter/filter.component'
import { FlightCardComponent } from './components/flight-card/flight-card.component'
import { FlightCard2Component } from './components/flight-card2/flight-card2.component'
import { FlightCard3Component } from './components/flight-card3/flight-card3.component'
import { FlightCard4Component } from './components/flight-card4/flight-card4.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    NoticeboardComponent,
    FilterComponent,
    FlightCardComponent,
    FlightCard2Component,
    FlightCard3Component,
    FlightCard4Component,
    PaginationComponent,
    Footer1Component,
  ],
  templateUrl: './list.component.html',
  styles: ``,
  providers: [NgbActiveOffcanvas],
})
export class ListComponent {}
