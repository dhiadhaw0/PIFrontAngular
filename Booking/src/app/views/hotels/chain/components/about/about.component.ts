import { Component, inject, type TemplateRef } from '@angular/core'
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'chain-about',
  standalone: true,
  imports: [CountUpModule, NgbModalModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {
  private modalService = inject(NgbModal)

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }
}
