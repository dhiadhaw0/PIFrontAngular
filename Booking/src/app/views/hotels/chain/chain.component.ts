import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { OfferComponent } from './components/offer/offer.component'
import { AboutComponent } from './components/about/about.component'
import { ServicesComponent } from './components/services/services.component'
import { ActionComponent } from './components/action/action.component'
import { GalleryComponent } from './components/gallery/gallery.component'
// import { FooterComponent } from './components/footer/footer.component'
import { NearbyComponent } from './components/nearby/nearby.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-chain',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    OfferComponent,
    AboutComponent,
    ServicesComponent,
    ActionComponent,
    NearbyComponent,
    GalleryComponent,
    Footer1Component,
  ],
  templateUrl: './chain.component.html',
  styles: ``,
})
export class ChainComponent {}
