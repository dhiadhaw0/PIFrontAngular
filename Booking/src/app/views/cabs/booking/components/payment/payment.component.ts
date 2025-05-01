import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'booking-payment',
  standalone: true,
  imports: [
    NgxMaskDirective,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './payment.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class PaymentComponent implements OnInit {
  paymentForm!: UntypedFormGroup
  submit = false

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
