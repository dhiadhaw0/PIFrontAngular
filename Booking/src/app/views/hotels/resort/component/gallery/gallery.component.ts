import { Component, OnInit, ViewChild } from '@angular/core'
import { testimonialReviewSlides } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'
import GLightbox from 'glightbox'

@Component({
  selector: 'resort-gallery',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  testimonialReviewSlides = testimonialReviewSlides

  @ViewChild('gallerySlider', { static: false }) gallerySlider: any
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider: any

  testimonialSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 1,
    autoplayDirection: 'forward',
    gutter: 2,
  }

  gallerySliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
    gutter: 2,
  }
  
  ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
  }
}
