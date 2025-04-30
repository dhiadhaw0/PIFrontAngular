import { Component } from '@angular/core'
import { aboutplaces } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'directories-place',
  standalone: true,
  imports: [],
  templateUrl: './place.component.html',
  styles: ``,
})
export class PlaceComponent {
  aboutplaces = aboutplaces

  constructor(private sanitizer: DomSanitizer) {
    this.aboutplaces.forEach((item) => {
      if (item.image) {
        item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.image)
      }
    })
  }
}
