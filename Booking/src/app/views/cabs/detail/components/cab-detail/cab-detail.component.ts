import { Component } from '@angular/core'
import { cabData } from '../../data'
import { CabDriverComponent } from '../cab-driver/cab-driver.component'
import { InclusionComponent } from '../inclusion/inclusion.component'
import { SafetyComponent } from '../safety/safety.component'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { TripDetailComponent } from '../trip-detail/trip-detail.component'

@Component({
  selector: 'cab-detail',
  standalone: true,
  imports: [
    TripDetailComponent,
    CabDriverComponent,
    InclusionComponent,
    SafetyComponent,
    SidebarComponent,
  ],
  templateUrl: './cab-detail.component.html',
  styles: ``,
})
export class CabDetailComponent {
  cabData = cabData
}
