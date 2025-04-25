import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'pricing-clients',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './clients.component.html',
  styles: ``,
})
export class ClientsComponent {
  @ViewChild('clientSlider', { static: false }) clientSlider: any

  clientSliderSetting: TinySliderSettings = {
    autoplay: true,
    edgePadding: 2,
    gutter: 80,
    arrowKeys: false,
    items: 5,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  }
}
