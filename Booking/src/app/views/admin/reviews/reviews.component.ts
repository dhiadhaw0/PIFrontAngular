import { Component } from '@angular/core'
import { AllReviewsComponent } from './components/all-reviews/all-reviews.component'
import { StatisticCardsComponent } from './components/statistic-cards/statistic-cards.component'
import { ReviewCardComponent } from './components/review-card/review-card.component'

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [AllReviewsComponent, StatisticCardsComponent, ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styles: ``,
})
export class ReviewsComponent {}
