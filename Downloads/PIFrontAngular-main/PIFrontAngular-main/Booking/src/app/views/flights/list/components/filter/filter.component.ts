import {
  Component,
  HostBinding,
  HostListener,
  Inject,
  Renderer2,
  inject,
} from '@angular/core'
import {
  airline,
  layoverAirports,
  onwordSteps,
  popularFilters,
  returnSteps,
} from '../../data'
import {
  NgbActiveOffcanvas,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap'
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'list-filter',
  standalone: true,
  imports: [NgbCollapseModule, NgxSliderModule, CommonModule],
  templateUrl: './filter.component.html',
  styles: ``,
})
export class FilterComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas)
  popularFilters = popularFilters
  onwordSteps = onwordSteps
  returnSteps = returnSteps
  airline = airline
  layoverAirports = layoverAirports
  isMobile: boolean = false
  isCollapsed = true
  isCollapsed2 = true

  // Range slider value set
  value: number = 700
  highValue: number = 1500
  options: Options = {
    floor: 500,
    ceil: 2000,
  }
}
