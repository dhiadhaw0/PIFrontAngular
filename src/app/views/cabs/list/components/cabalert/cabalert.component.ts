import { Component } from '@angular/core'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'cab-alert',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './cabalert.component.html',
  styles: `
    :host(cab-alert) {
      display: contents !important;
    }
  `,
})
export class CabalertComponent {}
