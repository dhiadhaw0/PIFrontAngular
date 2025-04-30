import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import type { TinySliderSettings } from 'tiny-slider'
import { servicesData } from '../../data'

@Component({
  selector: 'chain-services',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  serviceList = servicesData

  @ViewChild('serviceSlider', { static: false }) serviceSlider: any

  serviceSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    nested: 'inner',
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 1,
    autoplayDirection: 'forward',
    nav: false,
  }
}
