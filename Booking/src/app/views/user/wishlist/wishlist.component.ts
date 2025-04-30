import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { wishListCards } from './data'
import { currency } from '@/app/store'

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule, SelectFormInputDirective],
  templateUrl: './wishlist.component.html',
  styles: ``,
})
export class WishlistComponent {
  wishListCards = wishListCards
  currencyType = currency
}
