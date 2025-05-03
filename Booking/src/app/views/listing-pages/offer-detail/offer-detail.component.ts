import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { ListingComponent } from './components/listing/listing.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-offer-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    ListingComponent,
    Footer1Component,
  ],
  templateUrl: './offer-detail.component.html',
  styles: ``,
})
export class OfferDetailComponent {}
