import { credits, currentYear } from '@/app/store'
import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'detail-footer1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer1.component.html',
  styles: `
    :host(app-footer1) {
      display: contents !important;
    }
  `,
})
export class Footer1Component {
  topLinks = topLinks
  footerLinks = footerLinks
  currentYear = currentYear
  creditsBy = credits
}
