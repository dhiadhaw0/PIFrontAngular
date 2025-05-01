import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

type AvailabilityFormType = {
  location: string
  stayFor: Date | Array<Date>
  guests: {
    adults: number
    children: number
    rooms: number
  }
  applicants?: {
    individuals: number
    products: number
  }
}

@Component({
  selector: 'home-availability-filter',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    DateFormInputDirective,
    NgbDropdownModule,
  ],
  templateUrl: './availability-filter.component.html',
})
export class AvailabilityFilterComponent {
  formValue: AvailabilityFormType = {
    location: 'San Jacinto, USA',
    stayFor: [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)],
    guests: {
      adults: 2,
      rooms: 1,
      children: 0,
    },
    applicants: {
      individuals: 1,
      products: 1,
    },
  }

  updateGuests = (
    type: keyof AvailabilityFormType['guests'],
    increase: boolean = true
  ) => {
    const val = this.formValue.guests[type]
    this.formValue = {
      ...this.formValue,
      guests: {
        ...this.formValue.guests,
        [type]: increase ? val + 1 : val > 1 ? val - 1 : 0,
      },
    }
  }

  getGuestsValue = (): string => {
    let value = ''
    const guests = this.formValue.guests
    if (guests.adults || guests.children) {
      value +=
        guests.adults +
        guests.children +
        (guests.adults > 1 ? ' Guests ' : ' Guest ')
    }
    if (guests.rooms) {
      value += guests.rooms + (guests.rooms > 1 ? ' Rooms ' : ' Room ')
    }
    return value
  }

  updateApplicants = (
    type: keyof NonNullable<AvailabilityFormType['applicants']>,
    increase: boolean = true
  ) => {
    if (!this.formValue.applicants) return
    const val = this.formValue.applicants[type]
    this.formValue = {
      ...this.formValue,
      applicants: {
        ...this.formValue.applicants,
        [type]: increase ? val + 1 : val > 1 ? val - 1 : 1,
      },
    }
  }

  getApplicantsValue = (): string => {
    const applicants = this.formValue.applicants
    if (!applicants) return ''
    let value = ''
    if (applicants.individuals) {
      value += applicants.individuals + (applicants.individuals > 1 ? ' Applicants ' : ' Applicant ')
    }
    if (applicants.products) {
      value += applicants.products + (applicants.products > 1 ? ' Products' : ' Product')
    }
    return value
  }
}
