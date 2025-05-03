import { Component } from '@angular/core'

@Component({
  selector: 'detail-inclusion',
  standalone: true,
  imports: [],
  templateUrl: './inclusion.component.html',
  styles: `
    :host(detail-inclusion) {
      display: contents !important;
    }
  `,
})
export class InclusionComponent {}
