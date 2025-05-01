import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CounterComponent } from './components/counter/counter.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { ActionBoxComponent } from './components/action-box/action-box.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [
    HeroComponent,
    CounterComponent,
    BenefitsComponent,
    TestimonialsComponent,
    ActionBoxComponent,
    TopbarComponent,
    Footer1Component,
  ],
  templateUrl: './join-us.component.html',
  styles: ``,
})
export class JoinUsComponent {}
