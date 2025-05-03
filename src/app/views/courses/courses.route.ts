import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';

export const COURSE_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Courses - Home' }
  },
  {
    path: 'enrolled',
    component: EnrolledCoursesComponent,
    data: { title: 'My Enrolled Courses' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
