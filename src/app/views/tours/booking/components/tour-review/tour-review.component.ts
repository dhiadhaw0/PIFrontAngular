import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core'
import Stepper from 'bs-stepper'
import { hotelDetails, tourFlightDetail } from '../../data'
import { CommonModule } from '@angular/common'
import { PriceSummaryComponent } from '../price-summary/price-summary.component'
import {
  EmailValidator,
  FormBuilder,
  FormsModule,
  UntypedFormGroup,
} from '@angular/forms'


@Component({
  selector: 'booking-tour-review',
  standalone: true,
  imports: [
    CommonModule,
    PriceSummaryComponent,
    FormsModule,
  ],
  templateUrl: './tour-review.component.html',
  styles: ``,

})
export class TourReviewComponent {
  @ViewChild('stepperRef', { static: false }) stepperRef!: ElementRef
  @Input() className?: string
  tourFlightDetail = tourFlightDetail
  stepperInstance?: Stepper
  signInForm!: UntypedFormGroup
  hotelDetails = hotelDetails
  email!: string
  number!: number
  formSubmit: boolean = false
  firstName: string = ''
  lastName: string = ''
  password: string = ''
  mobileNumber!: number
  emailId!: EmailValidator
  paymentSubmitted: boolean = false

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.stepperRef && !this.stepperInstance) {
        this.stepperInstance = new Stepper(this.stepperRef.nativeElement, {
          linear: false,
          animation: true,
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.stepperInstance?.destroy()
  }

  message() {
    this.formSubmit = true
  }

  paymentContinue() {
    this.paymentSubmitted = true

    if (
      this.firstName &&
      this.lastName &&
      this.password &&
      this.mobileNumber &&
      this.emailId
    ) {
      this.stepperInstance?.next()
    }
  }
}
