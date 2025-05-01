import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { Component, TemplateRef, inject } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-travelers',
  standalone: true,
  imports: [DateFormInputDirective],
  templateUrl: './travelers.component.html',
  styles: ``,
})
export class TravelersComponent {
  private modalService = inject(NgbModal)

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content)
  }
}
