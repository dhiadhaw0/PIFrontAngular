import { Component } from '@angular/core'
import { WidgetCardComponent } from './components/widget-card/widget-card.component'
import { BookingStatsComponent } from './components/booking-stats/booking-stats.component'
import { UpcomingBookingComponent } from './components/upcoming-booking/upcoming-booking.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WidgetCardComponent,
    BookingStatsComponent,
    UpcomingBookingComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {}
