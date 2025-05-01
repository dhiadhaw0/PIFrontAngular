import { Component, ViewChild } from '@angular/core'
import { specialOffers } from '../../data'
import { TinySliderSettings } from 'tiny-slider'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'directories-special-offer',
  standalone: true,
  imports: [TinySliderComponent, RouterModule],
  templateUrl: './special-offer.component.html',
  styles: ``,
})
export class SpecialOfferComponent {
  specialOffers = specialOffers

  @ViewChild('specialOffer', { static: false }) bannerSlider: any

  specialOfferSettings: TinySliderSettings = {
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplay: false,
    controls: true,
    edgePadding: 2,
    items: 3,
    gutter: 0,
    nav: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
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
