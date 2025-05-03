import { NgxSliderModule, Options } from '@angular-slider/ngx-slider'
import { CommonModule } from '@angular/common'
import { Component, TemplateRef, inject } from '@angular/core'
import {
  NgbActiveOffcanvas,
  NgbCollapseModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap'
import {
  airline,
  layoverAirports,
  onwordSteps,
  popularFilters,
  returnSteps,
} from '../../data'

@Component({
  selector: 'list-noticeboard',
  standalone: true,
  imports: [NgbCollapseModule, NgxSliderModule, CommonModule],
  templateUrl: './noticeboard.component.html',
  styles: ``,
})
export class NoticeboardComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas)
  popularFilters = popularFilters
  onwordSteps = onwordSteps
  returnSteps = returnSteps
  airline = airline
  layoverAirports = layoverAirports

  isCollapsed = true
  isCollapsed2 = true

  private offcanvasService = inject(NgbOffcanvas)

  openOffcanvas(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }

  // Range slider value set
  value: number = 700
  highValue: number = 1500
  options: Options = {
    floor: 500,
    ceil: 2000,
  }
}
