import { Component, TemplateRef, inject } from '@angular/core'
import { flightRoutes } from '../../data'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-flight-information',
  standalone: true,
  imports: [],
  templateUrl: './flight-information.component.html',
  styles: ``,
})
export class FlightInformationComponent {
  flightRoutesInfo = flightRoutes
  public modalService = inject(NgbModal)

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' })
  }
}
