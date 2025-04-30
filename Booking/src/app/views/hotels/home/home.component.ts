import { Component, ViewChild } from '@angular/core'
import type { TinySliderSettings } from 'tiny-slider'
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { HeroComponent } from './components/hero/hero.component'
import { OfferSliderComponent } from './components/offer-slider/offer-slider.component'
import { FetureHotelComponent } from './components/feture-hotel/feture-hotel.component'
import { FeaturedHolidayComponent } from './components/featured-holiday/featured-holiday.component'
import { ClientsComponent } from './components/clients/clients.component'
import { TestimonialSliderComponent } from './components/testimonial-slider/testimonial-slider.component'
import { NearbyComponent } from './components/nearby/nearby.component'
import { AppsLinkComponent } from './components/apps-link/apps-link.component'
import { Footer1Component } from './components/footer1/footer1.component'
@Component({
  selector: 'hotels-home',
  standalone: true,
  imports: [
    TopNavComponent,
    HeroComponent,
    OfferSliderComponent,
    FetureHotelComponent,
    FeaturedHolidayComponent,
    ClientsComponent,
    TestimonialSliderComponent,
    NearbyComponent,
    AppsLinkComponent,
    Footer1Component,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('offerSlider', { static: false }) offerSlider: any

  offerSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    edgePadding: 2,
    items: 3,
    autoplayDirection: 'forward',
    nav: false,
    responsive: {
      1: {
        items: 1,
        gutter: 10,
      },
      768: {
        items: 1,
        gutter: 10,
      },
      992: {
        items: 2,
        gutter: 30,
      },
      1200: {
        items: 3,
        gutter: 30,
      },
    },
  }
}
