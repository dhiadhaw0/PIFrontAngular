import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component'

@Component({
  selector: 'booking-hero',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
