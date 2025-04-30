import { credits, currentYear } from '@/app/store'
import { footer2Link } from '@/assets/data/footer-items'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'directories-footer2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer2.component.html',
  styles: ``,
})
export class Footer2Component {
  footer2Link = footer2Link
  currentYear = currentYear
  creditsBy = credits
}
