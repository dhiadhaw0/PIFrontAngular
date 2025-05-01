import { Component } from '@angular/core'
import { userReviews } from '../../data'
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbPaginationModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { PaginationComponent } from '../pagination/pagination.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'reviews-review-card',
  standalone: true,
  imports: [
    NgbRatingModule,
    NgbCollapseModule,
    NgbPaginationModule,
    PaginationComponent,
    CommonModule,
    NgbDropdownModule,
  ],
  templateUrl: './review-card.component.html',
  styles: ``,
})
export class ReviewCardComponent {
  userReviewsData = userReviews
  isCollapsed: boolean = false

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`
  }
}
