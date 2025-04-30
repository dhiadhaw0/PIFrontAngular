import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COURSE_ROUTES } from './courses.route';
import { HomeComponent } from './home/home.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';

@NgModule({
  imports: [
    RouterModule.forChild(COURSE_ROUTES),
    HomeComponent,
    EnrolledCoursesComponent
  ]
})
export class CoursesModule { }
