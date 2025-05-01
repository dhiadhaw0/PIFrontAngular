import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider'
import { Component } from '@angular/core'
import { NgbAlertModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'grid-hero',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    NgbCollapseModule,
    NgxSliderModule,
    NgbAlertModule,
  ],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  isCollapsed = true

  // Range slider value set
  value: number = 700
  highValue: number = 1500
  options: Options = {
    floor: 500,
    ceil: 2000,
  }
  value1: number = 3
  highValue1: number = 5
  options1: Options = {
    floor: 2,
    ceil: 7,
  }
}
