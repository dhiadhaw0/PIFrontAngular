import { Component, ViewChild } from '@angular/core'
import { testimonialData } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'resort-experience',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  experienceList = testimonialData

  @ViewChild('experienceSlider', { static: false }) experienceSlider: any

  experienceSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 4,
    autoplayDirection: 'forward',
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
        items: 3,
        gutter: 30,
      },
      1200: {
        items: 4,
        gutter: 30,
      },
    },
  }
}
