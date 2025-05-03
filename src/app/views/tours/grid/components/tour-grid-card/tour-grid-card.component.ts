import { Component } from '@angular/core'
import { enrolledCourses } from '../../data'
import { RouterLink } from '@angular/router'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-grid-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tour-grid-card.component.html',
  styles: ``,
})
export class TourGridCardComponent {
  enrolledCourses = enrolledCourses
  currencyType = currency
}
