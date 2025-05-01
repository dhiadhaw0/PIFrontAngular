import { Component } from '@angular/core'
import { FlightDetailsComponent } from './components/flight-details/flight-details.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    FlightDetailsComponent,
    Footer1Component,
  ],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
