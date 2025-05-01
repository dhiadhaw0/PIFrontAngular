import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['course-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CourseCardComponent {
  @Input() course!: Course;
}
