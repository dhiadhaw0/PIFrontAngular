import { credits, currentYear } from '@/app/store'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'hotel-booking-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear = currentYear
  creditsBy = credits
}
