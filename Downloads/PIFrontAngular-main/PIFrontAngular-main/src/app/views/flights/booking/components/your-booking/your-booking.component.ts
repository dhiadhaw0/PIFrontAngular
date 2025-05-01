import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'booking-your-booking',
  standalone: true,
  imports: [
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './your-booking.component.html',
  styles: ``,
})
export class YourBookingComponent {
  currencyType = currency
  paymentForm!: UntypedFormGroup
  submit = false
  staticAlertClosed = false
  private fb = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      employmentStatus: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.min(0)]],
      employmentDuration: ['', [Validators.required, Validators.min(0)]],
      loanTerm: ['12', [Validators.required, Validators.min(1), Validators.max(36)]],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  get form() {
    return this.paymentForm.controls
  }

  onSubmit() {
    this.submit = true
    if (this.paymentForm.valid) {
      // Here you would typically:
      // 1. Submit the credit application
      // 2. Process the application
      // 3. Show success/error message
      console.log('Submitting credit application:', this.paymentForm.value)
    }
  }
}
