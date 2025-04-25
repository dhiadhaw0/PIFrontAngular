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
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'booking-your-booking',
  standalone: true,
  imports: [
    NgbAlertModule,
    NgxMaskDirective,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './your-booking.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class YourBookingComponent {
  currencyType = currency
  paymentForm!: UntypedFormGroup
  submit = false
  staticAlertClosed = false
  private fb = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardnumber: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
  }

  get form() {
    return this.paymentForm.controls
  }

  onSubmit() {
    this.submit = true
  }
}
