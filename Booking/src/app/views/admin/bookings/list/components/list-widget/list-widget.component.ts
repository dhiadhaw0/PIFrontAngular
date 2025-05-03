import { Component } from '@angular/core'
import { statisticData } from '../../data'

@Component({
  selector: 'booking-list-widget',
  standalone: true,
  imports: [],
  templateUrl: './list-widget.component.html',
  styles: ``,
})
export class ListWidgetComponent {
  statisticData = statisticData
}
