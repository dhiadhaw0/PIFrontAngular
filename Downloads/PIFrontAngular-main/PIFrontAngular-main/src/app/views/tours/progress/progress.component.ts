import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { enrolledCourses, EnrolledCourseType } from '../grid/data';

@Component({
  selector: 'tours-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: [],
})
export class ProgressComponent {
  course: EnrolledCourseType;
  chapters: any[] = [];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = enrolledCourses.find((c: EnrolledCourseType) => c.id === id) || enrolledCourses[0];
    // Example chapters for each course (could be dynamic)
    this.chapters = [
      { title: 'Introduction', completed: this.course.progress > 0, inProgress: this.course.progress > 0 && this.course.progress < 100 },
      { title: 'Core Concepts', completed: this.course.progress > 30, inProgress: this.course.progress > 30 && this.course.progress < 100 },
      { title: 'Case Studies', completed: this.course.progress > 60, inProgress: this.course.progress > 60 && this.course.progress < 100 },
      { title: 'Final Assessment', completed: this.course.progress === 100, inProgress: this.course.progress > 90 && this.course.progress < 100 },
    ];
  }

  get progressPercent(): number {
    return this.course.progress;
  }
} 