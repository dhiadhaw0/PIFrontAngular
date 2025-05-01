import { Component } from '@angular/core'
import { upcomingArrivals } from '../../data'

@Component({
  selector: 'admin-dashboard-upcoming-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-arrivals.component.html',
  styles: ``,
})
export class UpcomingArrivalsComponent {
  upcomingArrivals = upcomingArrivals
}
