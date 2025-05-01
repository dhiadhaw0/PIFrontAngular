import { ToastService } from '@/app/core/services/toastr.service'
import { currency } from '@/app/store'
import { Component, inject } from '@angular/core'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'offer-detail-listing',
  standalone: true,
  imports: [ NgbToastModule],
  templateUrl: './listing.component.html',
  styles: ``,
})
export class ListingComponent {
  currencyType = currency

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
