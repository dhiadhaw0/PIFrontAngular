import { Component } from '@angular/core'
import { GuestActivityComponent } from './components/guest-activity/guest-activity.component'
import { WidgetDahboardComponent } from './components/widget-dahboard/widget-dahboard.component'
import { PopularHotelComponent } from './components/popular-hotel/popular-hotel.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GuestActivityComponent,
    WidgetDahboardComponent,
    PopularHotelComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
