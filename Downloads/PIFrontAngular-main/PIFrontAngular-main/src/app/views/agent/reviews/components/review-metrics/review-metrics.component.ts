import { Component } from '@angular/core'
import { reviews } from '../../data'

@Component({
  selector: 'reviews-review-metrics',
  standalone: true,
  imports: [],
  templateUrl: './review-metrics.component.html',
  styles: ``,
})
export class ReviewMetricsComponent {
  reviewsData = reviews
}
