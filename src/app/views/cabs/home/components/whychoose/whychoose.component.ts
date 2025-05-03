import { Component } from '@angular/core'
import { cabsFeatures } from '../../data'

@Component({
  selector: 'home-whychoose',
  standalone: true,
  imports: [],
  templateUrl: './whychoose.component.html',
  styles: ``,
})
export class WhychooseComponent {
  fetureList = cabsFeatures
}
