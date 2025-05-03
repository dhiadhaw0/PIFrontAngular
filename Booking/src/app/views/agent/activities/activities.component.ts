import { Component } from '@angular/core'
import { recentActivities } from './data'

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.component.html',
  styles: ``,
})
export class ActivitiesComponent {
  recentActivities = recentActivities
}
