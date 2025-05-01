import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
}

interface AddressInformation {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface FinancialInformation {
  employmentStatus: 'employed' | 'self-employed' | 'student' | 'retired' | 'unemployed';
  annualIncome: number;
  sourceOfFunds: 'salary' | 'business' | 'investments' | 'inheritance' | 'other';
  preferredCurrency: 'USD' | 'EUR' | 'GBP' | 'JPY';
}

interface SecurityInformation {
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface WalletApplication {
  personal: PersonalInformation;
  address: AddressInformation;
  financial: FinancialInformation;
  security: SecurityInformation;
}

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

  isStepValid(): boolean {
    const form = this.applyForm;
    
    switch (this.currentStep) {
      case 1:
        // Validate personal information
        return (form.get('firstName')?.valid ?? false) &&
               (form.get('lastName')?.valid ?? false) &&
               (form.get('email')?.valid ?? false) &&
               (form.get('phone')?.valid ?? false) &&
               (form.get('dateOfBirth')?.valid ?? false);
      
      case 2:
        // Validate financial information
        return (form.get('employmentStatus')?.valid ?? false) &&
               (form.get('annualIncome')?.valid ?? false) &&
               (form.get('sourceOfFunds')?.valid ?? false) &&
               (form.get('preferredCurrency')?.valid ?? false);
      
      case 3:
        // Validate security information
        return (form.get('password')?.valid ?? false) &&
               (form.get('confirmPassword')?.valid ?? false) &&
               (form.get('termsAccepted')?.valid ?? false) &&
               !form.hasError('mismatch');
      
      default:
        return false;
    }
  }

  nextStep() {
    if (this.currentStep < this.totalSteps && this.isStepValid()) {
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
      
      const applicationData: WalletApplication = {
        personal: {
          firstName: this.applyForm.get('firstName')?.value,
          lastName: this.applyForm.get('lastName')?.value,
          email: this.applyForm.get('email')?.value,
          phone: this.applyForm.get('phone')?.value,
          dateOfBirth: this.applyForm.get('dateOfBirth')?.value
        },
        address: {
          street: this.applyForm.get('street')?.value,
          city: this.applyForm.get('city')?.value,
          state: this.applyForm.get('state')?.value,
          zipCode: this.applyForm.get('zipCode')?.value,
          country: this.applyForm.get('country')?.value
        },
        financial: {
          employmentStatus: this.applyForm.get('employmentStatus')?.value,
          annualIncome: this.applyForm.get('annualIncome')?.value,
          sourceOfFunds: this.applyForm.get('sourceOfFunds')?.value,
          preferredCurrency: this.applyForm.get('preferredCurrency')?.value
        },
        security: {
          password: this.applyForm.get('password')?.value,
          confirmPassword: this.applyForm.get('confirmPassword')?.value,
          termsAccepted: this.applyForm.get('termsAccepted')?.value
        }
      };

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