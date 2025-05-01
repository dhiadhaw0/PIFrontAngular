import { Component } from '@angular/core'
import { cabVehicles } from '../../data'

@Component({
  selector: 'home-vehicles',
  standalone: true,
  imports: [],
  templateUrl: './vehicles.component.html',
  styles: ``,
})
export class VehiclesComponent {
  vehiclesList = cabVehicles
}
