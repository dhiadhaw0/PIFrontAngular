import { Component, inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../modal/modal.component'
import { RouterModule } from '@angular/router'
import { currency, currentYear } from '@/app/store'

@Component({
  selector: 'list-flight-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './flight-card.component.html',
  styles: ``,
})
export class FlightCardComponent {
  private modalService = inject(NgbModal)
  currencyType = currency
  currentYear = currentYear

  open() {
    this.modalService.open(ModalComponent, { size: 'lg' })
  }
}
