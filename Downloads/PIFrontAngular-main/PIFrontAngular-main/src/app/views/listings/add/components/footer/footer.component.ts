import { credits, currentYear } from '@/app/store'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'listing-add-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear = currentYear
  creditsBy = credits
}
