import { currency } from '@/app/store'
import { Component, TemplateRef, inject } from '@angular/core'
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-cancellation-charges',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './cancellation-charges.component.html',
  styles: ``,
})
export class CancellationChargesComponent {
  public modalService = inject(NgbModal)
  currencyType = currency

  openChangeModal(ChangeContent: TemplateRef<any>) {
    this.modalService.open(ChangeContent, { size: 'lg' })
  }
}
