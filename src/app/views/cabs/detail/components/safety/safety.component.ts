import { Component } from '@angular/core'

@Component({
  selector: 'detail-safety',
  standalone: true,
  imports: [],
  templateUrl: './safety.component.html',
  styles: `
    :host(detail-safety) {
      display: contents !important;
    }
  `,
})
export class SafetyComponent {}
