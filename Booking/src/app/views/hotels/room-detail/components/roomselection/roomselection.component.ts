import { Component } from '@angular/core'
import { roomDetails } from '../../data'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { RouterModule } from '@angular/router'
import GLightbox from 'glightbox'

@Component({
  selector: 'room-selection',
  standalone: true,
  imports: [ SelectFormInputDirective, RouterModule],
  templateUrl: './roomselection.component.html',
})
export class RoomselectionComponent{
  roomDetails = roomDetails

   ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
    }
}
