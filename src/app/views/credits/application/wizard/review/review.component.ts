import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ReviewComponent implements OnInit {
  applicationData: any;

  constructor(
    private router: Router,
    private creditApplicationService: CreditApplicationService
  ) {}

  ngOnInit(): void {
    this.applicationData = this.creditApplicationService.getCurrentApplication();
  }

  submitApplication() {
    // Here you would typically submit all the collected data to your backend
    this.router.navigate(['/credits/application/confirmation']);
  }

  goBack() {
    this.router.navigate(['/credits/application/guarantor-info']);
  }
} 