import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { TourReviewComponent } from './components/tour-review/tour-review.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    TourReviewComponent,
    Footer1Component,
  ],
  templateUrl: './booking.component.html',
  styles: ``,
})
export class BookingComponent {}
