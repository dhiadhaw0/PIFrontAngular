import { Component } from '@angular/core'
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component'
import { DatechangePolicyComponent } from './components/datechange-policy/datechange-policy.component'
import { SpecialRequestComponent } from './components/special-request/special-request.component'
import { BookingPolicyComponent } from './components/booking-policy/booking-policy.component'

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    BookingPolicyComponent,
    CancellationPolicyComponent,
    DatechangePolicyComponent,
    SpecialRequestComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styles: ``,
})
export class PrivacyPolicyComponent {}
