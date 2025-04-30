import { Component } from '@angular/core'
import { Step1Component } from '../step1/step1.component'
import { Step2Component } from '../step2/step2.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'service-hero',
  standalone: true,
  imports: [NgbNavModule, Step1Component, Step2Component],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
