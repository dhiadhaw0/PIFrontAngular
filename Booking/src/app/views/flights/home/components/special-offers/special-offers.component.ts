import { Component, TemplateRef, inject } from '@angular/core'
import { specialOffers } from '../../data'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastService } from '@/app/core/services/toastr.service'

@Component({
  selector: 'flights-home-special-offers',
  standalone: true,
  imports: [ NgbToastModule],
  templateUrl: './special-offers.component.html',
  styles: ``,
})
export class SpecialOffersComponent {
  flightSpecialOffer = specialOffers
  show = false
  toastService = inject(ToastService)

  copyMessage(event: any) {
    const userSelectAllElement =
      event.currentTarget.querySelector('.user-select-all')
    const textToCopy = userSelectAllElement.innerText.trim()
    navigator.clipboard.writeText(textToCopy)

    this.show = true

    setTimeout(() => {
      this.show = false
    }, 3000)
  }
}
