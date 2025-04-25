import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'home-testimonial-slider',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './testimonial-slider.component.html',
  styles: ``,
})
export class TestimonialSliderComponent {
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider: any

  testimonialSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
    autoplay: true,
  }
}
