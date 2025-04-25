import { Component, ViewChild } from '@angular/core'
import { articleSlides } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'center-popular-articles',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './popular-articles.component.html',
  styles: ``,
})
export class PopularArticlesComponent {
  articleList = articleSlides

  @ViewChild('articleSlider', { static: false }) articleSlider: any

  articleSliderSetting: TinySliderSettings = {
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayDirection: 'forward',
    edgePadding: 2,
    nav: false,
    arrowKeys: true,
    controls: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    items: 3,
    gutter: 30,
    nested: 'inner',
    responsive: {
      1: {
        items: 1,
        gutter: 10,
      },
      768: {
        items: 2,
        gutter: 20,
      },
      1200: {
        items: 3,
        gutter: 30,
      },
    },
  }
}
