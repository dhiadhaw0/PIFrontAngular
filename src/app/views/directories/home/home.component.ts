import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { CategoryComponent } from './components/category/category.component'
import { ExplorePalcesComponent } from './components/explore-palces/explore-palces.component'
import { CouponComponent } from './components/coupon/coupon.component'
import { FeaturesComponent } from './components/features/features.component'
import { PlaceComponent } from './components/place/place.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { DestinationComponent } from './components/destination/destination.component'
import { SpecialOfferComponent } from './components/special-offer/special-offer.component'
import { Footer2Component } from './components/footer2/footer2.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    CategoryComponent,
    ExplorePalcesComponent,
    CouponComponent,
    FeaturesComponent,
    PlaceComponent,
    TestimonialComponent,
    DestinationComponent,
    SpecialOfferComponent,
    Footer2Component,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
