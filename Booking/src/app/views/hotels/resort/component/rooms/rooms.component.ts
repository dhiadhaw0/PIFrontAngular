import { Component, ViewChild } from '@angular/core'
import { roomSlides } from '../../data'
import type { TinySliderSettings } from 'tiny-slider'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'

@Component({
  selector: 'resort-rooms',
  standalone: true,
  imports: [TinySliderComponent],
  templateUrl: './rooms.component.html',
  styles: ``,
})
export class RoomsComponent {
  roomsList = roomSlides

  @ViewChild('roomSlider', { static: false }) roomSlider: any

  roomSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 1,
    autoplayDirection: 'forward',
    gutter: 0,
  }
}
