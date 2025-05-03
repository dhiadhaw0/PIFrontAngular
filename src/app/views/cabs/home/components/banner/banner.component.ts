import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'home-banner',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    NgbNavModule,
    CommonModule,
    DateFormInputDirective,
  ],
  templateUrl: './banner.component.html',
  styles: ``,
})
export class BannerComponent {
  activeTab = 'one-way'

  changeTab(tab: string) {
    this.activeTab = tab
  }
}
