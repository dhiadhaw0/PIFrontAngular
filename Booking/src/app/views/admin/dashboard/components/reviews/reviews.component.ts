import { Component } from '@angular/core'
import { hotelReviews } from '../../data'

@Component({
  selector: 'admin-dashboard-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styles: ``,
})
export class ReviewsComponent {
  hotelReviewsData = hotelReviews
}
