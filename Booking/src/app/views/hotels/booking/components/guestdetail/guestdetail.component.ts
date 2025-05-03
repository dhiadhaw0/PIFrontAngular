import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'booking-guestdetail',
  standalone: true,
  imports: [SelectFormInputDirective, RouterModule],
  templateUrl: './guestdetail.component.html',
  styles: ``,
})
export class GuestdetailComponent {}
