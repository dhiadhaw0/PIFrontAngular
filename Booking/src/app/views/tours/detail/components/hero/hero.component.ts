import { Component, ElementRef, ViewChild, viewChild } from '@angular/core'
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide'
import { galleryImages, thumbNailImages } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-hero',
  standalone: true,
  imports: [NgxSplideModule, NgbDropdownModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  galleryImages = galleryImages
  thumbNailImages = thumbNailImages
  selectedImageIndex = 1
  @ViewChild('mainSplide') mainSplide!: NgxSplideComponent
}
