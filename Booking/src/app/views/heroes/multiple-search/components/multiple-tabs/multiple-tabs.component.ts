import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

type AvailabilityFormType = {
  location?: string
  stayFor?: Date | Array<Date>
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

@Component({
  selector: 'multiple-search-tabs',
  standalone: true,
  imports: [
    NgbNavModule,
    DateFormInputDirective,
    SelectFormInputDirective,
    NgbDropdownModule,
    CommonModule,
  ],
  templateUrl: './multiple-tabs.component.html',
  styles: ``,
})
export class MultipleTabsComponent {
  timePicker: Date | null = null
  activeTab = 'one-way'
  changeTab(tab: string) {
    this.activeTab = tab
  }
  formValue: AvailabilityFormType = {
    guests: {
      adults: 0,
      children: 0,
      rooms: 0,
    },
  }

  updateGuests(
    type: keyof AvailabilityFormType['guests'],
    increase: boolean = true
  ): void {
    const val = this.formValue.guests[type]
    this.formValue = {
      ...this.formValue,
      guests: {
        ...this.formValue.guests,
        [type]: increase ? val + 1 : val > 1 ? val - 1 : 0,
      },
    }
  }

  getGuestsValue(): string {
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
}
