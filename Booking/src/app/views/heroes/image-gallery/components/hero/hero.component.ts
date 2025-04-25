import { Component, OnInit } from '@angular/core'
import GLightbox from 'glightbox'

@Component({
  selector: 'image-gallery-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
  }
}
