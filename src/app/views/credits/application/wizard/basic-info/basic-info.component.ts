import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.basicInfoForm = this.fb.group({
      montantDemande: ['', [Validators.required, Validators.min(1000)]],
      creditDuration: ['', [Validators.required, Validators.min(6), Validators.max(60)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.basicInfoForm.valid) {
      // Store the form data in a service or state management
      this.router.navigate(['/credits/application/user-type']);
    }
  }
} 