import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, OnInit, ViewChild } from '@angular/core'
import { TinySliderSettings } from 'tiny-slider'
import { testimonialSlides } from '../../data'
import GLightbox from 'glightbox'

@Component({
  selector: 'tour-stories',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './tour-stories.component.html',
  styleUrl: './tour-stories.component.scss',
})
export class TourStoriesComponent implements OnInit {
  testimonialSlides = testimonialSlides

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

  ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
  }
}
