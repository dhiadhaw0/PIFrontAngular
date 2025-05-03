import { Component } from '@angular/core'
import { topCategories } from '../../data'

@Component({
  selector: 'tours-top-category',
  standalone: true,
  imports: [],
  templateUrl: './top-category.component.html',
  styles: ``,
})
export class TopCategoryComponent {
  topCategoriesData = topCategories
}
