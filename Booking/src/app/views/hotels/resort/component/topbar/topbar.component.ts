import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { Component, inject, type TemplateRef } from '@angular/core'
import {
  NgbDropdownModule,
  NgbOffcanvas,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap'

type AvailabilityFormType = {
  location: string
  stayFor: Date | Array<Date>
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

@Component({
  selector: 'resort-topbar',
  standalone: true,
  imports: [
    LogoBoxComponent,
    VerticalMenuButtonComponent,
    AppMenuComponent,
    NgbOffcanvasModule,
    DateFormInputDirective,
    NgbDropdownModule,
    SelectFormInputDirective,
  ],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  public offcanvasService = inject(NgbOffcanvas)

  openModal(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'offcanvas-w-500px offcanvas-end',
    })
  }

  formValue: AvailabilityFormType = {
    location: 'San Jacinto, USA',
    stayFor: [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)],
    guests: {
      adults: 2,
      rooms: 1,
      children: 0,
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
}
