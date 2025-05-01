import { ChartOptions } from '@/app/core/models/apexchart.model'
import { Component } from '@angular/core'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'admin-dashboard-room-availability',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './room-availability.component.html',
  styles: ``,
})
export class RoomAvailabilityComponent {
  getRootColor = (color: string): string => {
    const selector = document.querySelector(':root')
    if (selector)
      return window.getComputedStyle(selector).getPropertyValue(color)
    else return '#5143d9'
  }

  roomAvailibility: Partial<ChartOptions> = {
    series: [70, 30],
    labels: ['Sold Out', 'Available'],
    chart: {
      height: 299,
      width: 300,
      offsetX: 0,
      type: 'donut',
      sparkline: {
        enabled: !0,
      },
    },
    colors: [
      this.getRootColor('--bs-danger'),
      this.getRootColor('--bs-success'),
    ],
    tooltip: {
      theme: 'dark',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
}
