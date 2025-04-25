import { credits, currentYear } from '@/app/store'
import { footer3Link } from '@/assets/data/footer-items'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'flights-home-footer3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer3.component.html',
  styleUrl: './footer3.component.scss',
})
export class Footer3Component {
  footer3Link = footer3Link
  currentYear = currentYear
  creditsBy = credits
}
