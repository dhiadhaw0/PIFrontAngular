import { StickyDirective } from '@/app/directives/sticky.directive'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'detail-price-overview',
  standalone: true,
  imports: [RouterModule, ScrollToModule, StickyDirective, CommonModule],
  templateUrl: './price-overview.component.html',
  styles: `
    :host(detail-price-overview) {
      display: contents !important;
    }
  `,
  providers: [ScrollToService],
})
export class PriceOverviewComponent {
  currencyType = currency
  classFlag = true
  isSticky = window.innerWidth >= 1200
}
