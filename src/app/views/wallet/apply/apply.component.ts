import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-apply',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  applyForm: FormGroup;
  currentStep = 1;
  totalSteps = 3;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.applyForm = this.fb.group({
      // Personal Information
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      dateOfBirth: ['', [Validators.required]],
      
      // Address Information
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)]],
      country: ['', Validators.required],
      
      // Financial Information
      employmentStatus: ['', Validators.required],
      annualIncome: ['', [Validators.required, Validators.min(0)]],
      sourceOfFunds: ['', Validators.required],
      preferredCurrency: ['USD', Validators.required],
      
      // Security Information
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    // Add any initialization logic here
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.applyForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to success page or wallet home
        this.router.navigate(['/wallet/home']);
      }, 2000);
    }
  }

  getStepTitle(): string {
    switch (this.currentStep) {
      case 1:
        return 'Personal Information';
      case 2:
        return 'Financial Details';
      case 3:
        return 'Security Setup';
      default:
        return '';
    }
  }

  getProgress(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }
} 