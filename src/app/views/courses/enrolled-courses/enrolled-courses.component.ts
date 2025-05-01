import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EnrolledCourse } from '../interfaces/course.interface';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
  imports: [CommonModule, DatePipe],
  standalone: true
})
export class EnrolledCoursesComponent implements OnInit {
  enrolledCourses: EnrolledCourse[] = [
    {
      id: 1,
      name: 'Introduction to Microfinance',
      instructor: 'Dr. Jane Smith',
      image: 'assets/images/category/course/01.jpg',
      progress: 60,
      price: 99,
      enrolledDate: '2024-05-01',
      description: 'Learn the fundamentals of microfinance and how it empowers communities.'
    },
    {
      id: 2,
      name: 'Digital Banking Essentials',
      instructor: 'Mr. John Doe',
      image: 'assets/images/category/course/02.jpg',
      progress: 20,
      price: 120,
      enrolledDate: '2024-05-10',
      description: 'Master the essentials of digital banking and fintech.'
    },
    {
      id: 3,
      name: 'Entrepreneurship Basics',
      instructor: 'Ms. Emily Clark',
      image: 'assets/images/category/course/03.jpg',
      progress: 100,
      price: 85,
      enrolledDate: '2024-04-20',
      description: 'Kickstart your entrepreneurial journey with practical basics.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
