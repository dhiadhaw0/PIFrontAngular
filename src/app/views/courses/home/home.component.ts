import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { PriceSummaryComponent } from '../components/price-summary/price-summary.component';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, CourseCardComponent, PriceSummaryComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  courses: Course[] = [
    {
      name: 'Introduction to Microfinance',
      type: 'Finance',
      price: 99,
      duration: '4 weeks',
      rating: 4.8,
      image: 'assets/images/category/course/01.jpg',
      isNew: true,
      isPopular: false,
      instructor: 'Dr. Jane Smith',
      mode: 'Online'
    },
    {
      name: 'Digital Banking Essentials',
      type: 'Technology',
      price: 120,
      duration: '6 weeks',
      rating: 4.7,
      image: 'assets/images/category/course/02.jpg',
      isNew: false,
      isPopular: true,
      instructor: 'Mr. John Doe',
      mode: 'Offline'
    },
    {
      name: 'Entrepreneurship Basics',
      type: 'Business',
      price: 85,
      duration: '5 weeks',
      rating: 4.6,
      image: 'assets/images/category/course/03.jpg',
      isNew: false,
      isPopular: true,
      instructor: 'Ms. Emily Clark',
      mode: 'Online'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
