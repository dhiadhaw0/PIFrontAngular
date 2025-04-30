import { Component } from '@angular/core'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-about',
  standalone: true,
  imports: [NgbTooltipModule, NgbCollapseModule],
  templateUrl: './about.component.html',
  styles: `
    :host(detail-about) {
      display: contents !important;
    }
  `,
})
export class AboutComponent {
  isCollapsed = true
}
