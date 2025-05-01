import { Component } from '@angular/core'
import { courses } from '../../data'
import { RouterLink } from '@angular/router'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'tours-tour-package',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './tour-package.component.html',
  styles: ``,
})
export class TourPackageComponent {
  courses = courses
  currencyType = currency

  showEnrollModal = false;
  selectedCourse: any = null;
  enrollForm = {
    name: '',
    email: '',
    phone: '',
    referral: '',
    agree: false
  };

  openEnrollModal(course: any) {
    this.selectedCourse = course;
    this.showEnrollModal = true;
    this.enrollForm = { name: '', email: '', phone: '', referral: '', agree: false };
  }

  closeEnrollModal() {
    this.showEnrollModal = false;
    this.selectedCourse = null;
  }

  submitEnrollForm() {
    // Here you would handle the form submission (e.g., send to API)
    alert(`Enrolled in ${this.selectedCourse?.name} as ${this.enrollForm.name}`);
    this.closeEnrollModal();
  }
}
