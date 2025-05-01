import { Component } from '@angular/core'
import { nearbyPlacesData } from '../../data'

@Component({
  selector: 'chain-nearby',
  standalone: true,
  imports: [],
  templateUrl: './nearby.component.html',
  styles: ``,
})
export class NearbyComponent {
  nearbyList = nearbyPlacesData
}
