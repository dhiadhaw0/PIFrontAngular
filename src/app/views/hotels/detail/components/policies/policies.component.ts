import { Component } from '@angular/core'

@Component({
  selector: 'detail-policies',
  standalone: true,
  imports: [],
  templateUrl: './policies.component.html',
  styles: `
    :host(detail-policies) {
      display: contents !important;
    }
  `,
})
export class PoliciesComponent {
  policies = [
    'Check-in: 1:00 pm - 9:00 pm',
    'Check out: 11:00 am',
    'Self-check-in with building staff',
    'No pets',
    'No parties or events',
    'Smoking is allowed',
  ]
}
