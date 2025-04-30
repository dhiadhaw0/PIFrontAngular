import { Component } from '@angular/core'
import { ListingWidgetComponent } from './components/listing-widget/listing-widget.component'
import { ListingListComponent } from './components/listing-list/listing-list.component'

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [ListingWidgetComponent, ListingListComponent],
  templateUrl: './listings.component.html',
  styles: ``,
})
export class ListingsComponent {}
