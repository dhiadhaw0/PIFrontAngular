import { Component } from '@angular/core'
import { featuredHotelsData } from '../../data'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'home-feture-hotel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './feture-hotel.component.html',
  styles: ``,
})
export class FetureHotelComponent {
  hotels = featuredHotelsData
  currencyType = currency
}
