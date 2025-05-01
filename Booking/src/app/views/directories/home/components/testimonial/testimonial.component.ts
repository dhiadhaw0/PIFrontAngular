import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import { TinySliderSettings } from 'tiny-slider'
import { testimonialSlides } from '../../data'

@Component({
  selector: 'directories-testimonial',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './testimonial.component.html',
  styles: ``,
})
export class TestimonialComponent {
  testimonialSlides = testimonialSlides
  @ViewChild('bannerSlider', { static: false }) bannerSlider: any

  bannerSliderSettings: TinySliderSettings = {
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplay: true,
    controls: true,
    edgePadding: 2,
    items: 1,
    gutter: 0,
    nav: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  }
}
