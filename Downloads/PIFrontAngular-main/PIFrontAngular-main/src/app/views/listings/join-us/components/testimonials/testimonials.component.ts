import { Component, ViewChild } from '@angular/core'
import { testimonialSlides } from '../../data'
import type { TinySliderSettings } from 'tiny-slider'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'

@Component({
  selector: 'join-us-testimonials',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  testimonialSlides = testimonialSlides

  @ViewChild('testimonialSwiper', { static: false }) testimonialSwiper: any

  testimonialSetting: TinySliderSettings = {
    arrowKeys: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    // nested: 'inner',
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    edgePadding: 0,
    items: 1,
    autoplayDirection: 'forward',
    nav: false,
  }
}
