import { currency } from '@/app/store'
import { Component, inject } from '@angular/core'
import {
  NgbActiveModal,
  NgbModalModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbModalModule, NgbNavModule],
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent {
  activeModal = inject(NgbActiveModal)
  currencyType = currency
}
