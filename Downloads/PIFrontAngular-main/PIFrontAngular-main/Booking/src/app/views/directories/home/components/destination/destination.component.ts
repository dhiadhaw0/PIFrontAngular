import { Component } from '@angular/core'
import { topCities } from '../../data'

@Component({
  selector: 'directories-destination',
  standalone: true,
  imports: [],
  templateUrl: './destination.component.html',
  styles: ``,
})
export class DestinationComponent {
  topCities = topCities
}
