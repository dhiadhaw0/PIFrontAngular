import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { currentYear } from '@/app/store'
import { Component, ViewChild } from '@angular/core'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'chain-offer',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './offer.component.html',
  styles: ``,
})
export class OfferComponent {
  currentYear = currentYear
  @ViewChild('offerSlider', { static: false }) offerSlider: any

  offerSliderSettings: TinySliderSettings = {
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
        items: 2,
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
