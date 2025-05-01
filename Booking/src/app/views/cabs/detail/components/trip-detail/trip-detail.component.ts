import { Component } from '@angular/core'

@Component({
  selector: 'detail-trip-detail',
  standalone: true,
  imports: [],
  templateUrl: './trip-detail.component.html',
  styles: `
    :host(detail-trip-detail) {
      display: contents !important;
    }
  `,
})
export class TripDetailComponent {}
