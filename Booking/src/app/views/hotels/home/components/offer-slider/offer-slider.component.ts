import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import { RouterModule } from '@angular/router'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'home-offer-slider',
  standalone: true,
  imports: [TinySliderComponent, RouterModule],
  templateUrl: './offer-slider.component.html',
  styles: ``,
})
export class OfferSliderComponent {
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
