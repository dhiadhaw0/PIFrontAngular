import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject, ViewChild, type OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { RouterModule } from '@angular/router'
import {
  NgbAccordionModule,
  NgbAlertModule,
  type NgbAlert,
} from '@ng-bootstrap/ng-bootstrap'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'booking-payment-option',
  standalone: true,
  imports: [
    NgbAccordionModule,
    SelectFormInputDirective,
    NgxMaskDirective,
    NgbAlertModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './payment-option.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class PaymentOptionComponent implements OnInit {
  currencyType = currency
  staticAlertClosed = false

  paymentForm!: UntypedFormGroup
  submit = false

  private fb = inject(UntypedFormBuilder)

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert

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
