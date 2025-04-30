import { Component } from '@angular/core'
import { ReviewsComponent } from '../reviews/reviews.component'
import { RoomAvailabilityComponent } from '../room-availability/room-availability.component'
import { RoomNotificationsComponent } from '../room-notifications/room-notifications.component'
import { UpcomingArrivalsComponent } from '../upcoming-arrivals/upcoming-arrivals.component'
import { ChartOptions } from '@/app/core/models/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'admin-dashboard-guest-activity',
  standalone: true,
  imports: [
    RoomAvailabilityComponent,
    RoomNotificationsComponent,
    ReviewsComponent,
    UpcomingArrivalsComponent,
    NgApexchartsModule,
  ],
  templateUrl: './guest-activity.component.html',
  styles: ``,
})
export class GuestActivityComponent {
  getRootColor = (color: string): string => {
    const selector = document.querySelector(':root')
    if (selector)
      return window.getComputedStyle(selector).getPropertyValue(color)
    else return '#5143d9'
  }

  guestChart: Partial<ChartOptions> = {
    series: [
      {
        name: 'Check-in',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Check-out',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [this.getRootColor('--bs-primary'), this.getRootColor('--bs-info')],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    },
  }
}
