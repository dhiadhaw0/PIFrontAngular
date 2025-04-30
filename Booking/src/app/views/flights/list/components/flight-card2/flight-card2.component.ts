import { Component, inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../modal/modal.component'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'list-flight-card2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './flight-card2.component.html',
  styles: ``,
})
export class FlightCard2Component {
  private modalService = inject(NgbModal)
  currencyType = currency
  open() {
    this.modalService.open(ModalComponent, { size: 'lg' })
  }
}
