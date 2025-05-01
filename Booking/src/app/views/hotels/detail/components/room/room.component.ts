import { Component, inject, ViewChild, type TemplateRef } from '@angular/core'
import { hotelRooms, type HotelsRoomType } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'
import { CommonModule } from '@angular/common'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'

@Component({
  selector: 'detail-room',
  standalone: true,
  imports: [
    TinySliderComponent,
    CommonModule,
    SelectFormInputDirective,
    NgbModalModule,
  ],
  templateUrl: './room.component.html',
  styles: `
    :host(detail-room) {
      display: contents !important;
    }
  `,
})
export class RoomComponent {
  roomList = hotelRooms
  currencyType = currency
  hotelroomDetail: HotelsRoomType = hotelRooms[0]

  @ViewChild('roomSlider', { static: false }) roomSlider: any

  private modalService = inject(NgbModal)

  roomSliderStting: TinySliderSettings = {
    autoplay: true,
    nav: false,
    items: 1,
    controls: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  }

  openDetail(content: TemplateRef<any>, data: HotelsRoomType) {
    this.hotelroomDetail = data
    this.modalService.open(content, { centered: true })
  }
}
