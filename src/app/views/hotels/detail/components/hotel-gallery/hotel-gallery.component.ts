import { Component, inject, OnInit, type TemplateRef } from '@angular/core'
import {
  NgbAlertModule,
  NgbDropdownModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap'
import GLightbox from 'glightbox'

@Component({
  selector: 'detail-hotel-gallery',
  standalone: true,
  imports: [
    NgbDropdownModule,
    NgbAlertModule,
    NgbModalModule,
  ],
  templateUrl: './hotel-gallery.component.html',
  styleUrl: './hotel-gallery.component.scss',
})
export class HotelGalleryComponent implements OnInit {
  staticAlert = true

  private modalService = inject(NgbModal)

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true })
  }

    ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
  }
}
