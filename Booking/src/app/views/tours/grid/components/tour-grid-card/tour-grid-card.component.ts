import { Component } from '@angular/core'
import { tourCards } from '../../data'
import { PaginationComponent } from '../pagination/pagination.component'
import { RouterLink } from '@angular/router'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { currency } from '@/app/store'

@Component({
  selector: 'app-tour-grid-card',
  standalone: true,
  imports: [PaginationComponent, RouterLink, SelectFormInputDirective],
  templateUrl: './tour-grid-card.component.html',
  styles: ``,
})
export class TourGridCardComponent {
  tourCards = tourCards
  currencyType = currency
}
