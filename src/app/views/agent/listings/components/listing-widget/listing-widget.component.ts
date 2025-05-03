import { Component } from '@angular/core'
import { statistics } from '../../data'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'listing-widget',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './listing-widget.component.html',
  styles: ``,
})
export class ListingWidgetComponent {
  statisticsData = statistics
}
