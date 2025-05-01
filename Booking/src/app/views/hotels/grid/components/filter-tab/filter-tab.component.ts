import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { NgxSliderModule, type Options } from '@angular-slider/ngx-slider'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'grid-filter-tab',
  standalone: true,
  imports: [
    NgbCollapseModule,
    NgxSliderModule,
    SelectFormInputDirective,
    RouterModule,
  ],
  templateUrl: './filter-tab.component.html',
  styles: ``,
})
export class FilterTabComponent {
  isCollapsed = true

  // Range slider value set
  value: number = 700.0
  highValue: number = 1500.0
  options: Options = {
    floor: 500,
    ceil: 2000,
  }
}
