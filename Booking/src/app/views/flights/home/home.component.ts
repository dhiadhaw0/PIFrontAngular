import { Component } from '@angular/core'
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { HeroComponent } from './components/hero/hero.component'
import { SpecialOffersComponent } from './components/special-offers/special-offers.component'
import { PopularDestinationsComponent } from './components/popular-destinations/popular-destinations.component'
import { BlogsAndNewsComponent } from './components/blogs-and-news/blogs-and-news.component'
import { DestinationStepsComponent } from './components/destination-steps/destination-steps.component'
import { ActionBoxComponent } from './components/action-box/action-box.component'
import { Footer3Component } from './components/footer3/footer3.component'

@Component({
  selector: 'flights-home',
  standalone: true,
  imports: [
    TopNavComponent,
    HeroComponent,
    SpecialOffersComponent,
    PopularDestinationsComponent,
    BlogsAndNewsComponent,
    DestinationStepsComponent,
    ActionBoxComponent,
    Footer3Component,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
