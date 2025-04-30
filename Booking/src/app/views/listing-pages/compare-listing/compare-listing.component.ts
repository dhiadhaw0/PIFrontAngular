import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { ListingComponent } from './components/listing/listing.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-compare-listing',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    ListingComponent,
    ActionboxComponent,
    Footer1Component,
  ],
  templateUrl: './compare-listing.component.html',
  styles: ``,
})
export class CompareListingComponent {}
