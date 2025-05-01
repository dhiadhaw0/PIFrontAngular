import { Component } from '@angular/core'
import { tripCategories } from '../../data'

@Component({
  selector: 'multiple-search-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styles: ``,
})
export class CategoryComponent {
  tripCategories = tripCategories
}
