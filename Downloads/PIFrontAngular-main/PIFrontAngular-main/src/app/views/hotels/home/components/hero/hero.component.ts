import { Component, OnInit } from '@angular/core'
import { AvailabilityFilterComponent } from '../availability-filter/availability-filter.component'
import GLightbox from 'glightbox'

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [AvailabilityFilterComponent],
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
