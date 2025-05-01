import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { featuredCourses } from '../../data'

@Component({
  selector: 'tours-top-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-category.component.html',
  styles: ``,
})
export class TopCategoryComponent {
  featuredCourses = featuredCourses
}
