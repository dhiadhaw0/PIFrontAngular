import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'directories-category',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './category.component.html',
  styles: ``,
})
export class CategoryComponent {
  @ViewChild('gallerySlider', { static: false }) offerSlider: any

  gallerySliderSettings: TinySliderSettings = {
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    // autoplay: true,
    controls: true,
    items: 5,
    autoplayDirection: 'forward',
    nav: false,
    responsive: {
      1: {
        items: 1,
        gutter: 10,
      },
      576: {
        items: 2,
        gutter: 10,
      },
      768: {
        items: 3,
        gutter: 30,
      },
      1200: {
        items: 5,
        gutter: 30,
      },
    },
  }
}
