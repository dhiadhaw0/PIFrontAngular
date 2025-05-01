import { Component } from '@angular/core'
import { tourPackages } from '../../data'
import { RouterLink } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'tours-tour-package',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tour-package.component.html',
  styles: ``,
})
export class TourPackageComponent {
  tourPackages = tourPackages
  currencyType = currency
}
