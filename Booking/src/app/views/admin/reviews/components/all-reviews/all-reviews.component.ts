import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'reviews-all-reviews',
  standalone: true,
  imports: [SelectFormInputDirective, CommonModule],
  templateUrl: './all-reviews.component.html',
  styles: ``,
})
export class AllReviewsComponent {
  activeButton: number = 1

  showButton(index: number) {
    this.activeButton = index
  }
}
