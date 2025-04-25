import { credits, currentYear } from '@/app/store'
import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'tours-detail-footer1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer1.component.html',
  styles: ``,
})
export class Footer1Component {
  topLinks = topLinks
  currentYear = currentYear
  footerLinks = footerLinks
  creditsBy = credits
}
