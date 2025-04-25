import { ToastService } from '@/app/core/services/toastr.service'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  TemplateRef,
  inject,
} from '@angular/core'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'directories-coupon',
  standalone: true,
  imports: [NgbToastModule],
  templateUrl: './coupon.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CouponComponent {
  toastService = inject(ToastService)
  code = 'BOOK56'
  show = false

  copyText(text: any) {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.value = text
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
    this.show = true

    setTimeout(() => {
      this.show = false
    }, 3000)
  }
}
