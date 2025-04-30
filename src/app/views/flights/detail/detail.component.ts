import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteBancaireService } from '../../../services/compte-bancaire.service';
import { CompteBancaire } from '../../../models/compte-bancaire.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container-fluid min-vh-100 py-5" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-lg border-0">
            <div class="card-header bg-primary text-white text-center py-4">
              <h4 class="mb-0">Open a Bank Account</h4>
            </div>
            <div class="card-body p-5">
              <!-- Account Creation Form -->
              <form [formGroup]="accountForm" (ngSubmit)="onSubmit()" class="needs-validation">
                <!-- Personal Information Section -->
                <div class="mb-4">
                  <h5 class="mb-3">Personal Information</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" formControlName="firstName" placeholder="Enter your first name">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" formControlName="lastName" placeholder="Enter your last name">
                    </div>
                    <div class="col-12">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" formControlName="email" placeholder="Enter your email">
                    </div>
                  </div>
                </div>

                <!-- Account Details Section -->
                <div class="mb-4">
                  <h5 class="mb-3">Account Details</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Account Type</label>
                      <select class="form-select" formControlName="accountType">
                        <option value="savings">Savings Account</option>
                        <option value="checking">Checking Account</option>
                        <option value="business">Business Account</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Initial Deposit ($)</label>
                      <input type="number" class="form-control" formControlName="initialDeposit" placeholder="Enter amount">
                    </div>
                  </div>
                </div>

                <!-- Additional Information Section -->
                <div class="mb-4">
                  <h5 class="mb-3">Additional Information</h5>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Phone Number</label>
                      <input type="tel" class="form-control" formControlName="phone" placeholder="Enter your phone number">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Date of Birth</label>
                      <input type="date" class="form-control" formControlName="dateOfBirth">
                    </div>
                    <div class="col-12">
                      <label class="form-label">Address</label>
                      <textarea class="form-control" formControlName="address" rows="3" placeholder="Enter your address"></textarea>
                    </div>
                  </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="mb-4">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" formControlName="termsAccepted" id="terms">
                    <label class="form-check-label" for="terms">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary btn-lg" [disabled]="!accountForm.valid || !accountForm.get('termsAccepted')?.value">
                    <i class="bi bi-check-circle me-2"></i>Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Features Cards -->
          <div class="row mt-5 g-4">
            <div class="col-md-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <i class="bi bi-shield-check display-5 text-primary mb-3"></i>
                  <h5>Secure Banking</h5>
                  <p class="text-muted mb-0">Your money is protected with state-of-the-art security measures</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <i class="bi bi-phone display-5 text-primary mb-3"></i>
                  <h5>Mobile Banking</h5>
                  <p class="text-muted mb-0">Access your account anytime, anywhere with our mobile app</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <i class="bi bi-graph-up display-5 text-primary mb-3"></i>
                  <h5>Investment Options</h5>
                  <p class="text-muted mb-0">Grow your wealth with our diverse investment opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`
    :host {
      display: block;
      background-color: #f8f9fa;
    }

    .card {
      border-radius: 15px;
      overflow: hidden;
    }

    .card-header {
      background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
    }

    .form-control, .form-select {
      border-radius: 8px;
      padding: 0.75rem 1rem;
    }

    .form-control:focus, .form-select:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    .btn-primary {
      padding: 1rem 2rem;
      border-radius: 8px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .display-5 {
      font-size: 3rem;
    }
  `]
})
export class DetailComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private compteBancaireService: CompteBancaireService
  ) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      accountType: ['savings', Validators.required],
      initialDeposit: [0, [Validators.required, Validators.min(0)]],
      phone: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.accountForm.valid) {
      const formData = this.accountForm.value;
      const newAccount: CompteBancaire = {
        rib: Math.random().toString(36).substring(2, 15),
        solde: formData.initialDeposit,
        dateCreation: new Date()
      };

      // Assuming user ID 1 for demo purposes
      this.compteBancaireService.createCompte(1, newAccount).subscribe({
        next: (response) => {
          console.log('Account created successfully', response);
          // Handle success (e.g., show success message, redirect)
        },
        error: (error) => {
          console.error('Error creating account', error);
          // Handle error (e.g., show error message)
        }
      });
    }
  }
}
