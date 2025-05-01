import { Component } from '@angular/core'
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { HeroComponent } from './components/hero/hero.component'
import { SpecialOffersComponent } from './components/special-offers/special-offers.component'
import { PopularLoansComponent } from './components/popular-loans/popular-loans.component'
import { ApplicationStepsComponent } from './components/application-steps/application-steps.component'
import { ActionBoxComponent } from './components/action-box/action-box.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { Footer3Component } from './components/footer3/footer3.component'
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component'

@Component({
  selector: 'credits-home',
  standalone: true,
  imports: [
    TopNavComponent,
    HeroComponent,
    SpecialOffersComponent,
    PopularLoansComponent,
    ApplicationStepsComponent,
    ActionBoxComponent,
    TestimonialsComponent,
    Footer3Component,
    InterestCalculatorComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {} 