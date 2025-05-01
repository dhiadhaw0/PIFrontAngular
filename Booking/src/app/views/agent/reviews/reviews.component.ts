import { Component } from '@angular/core'
import { userReviews } from './data'
import { ReviewMetricsComponent } from './components/review-metrics/review-metrics.component'
import { ReviewDetailComponent } from './components/review-detail/review-detail.component'

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewMetricsComponent, ReviewDetailComponent],
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  userReviewsData = userReviews
}
