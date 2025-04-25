import { currency } from '@/app/store'
import { Component, inject, type TemplateRef } from '@angular/core'
import { NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'list-filter-offcanvas',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './filter-offcanvas.component.html',
  styles: ``,
})
export class FilterOffcanvasComponent {
  currencyType = currency
  isCollapsed = true
  amenitiesCollapsed = true

  public offcanvasService = inject(NgbOffcanvas)

  showFilter(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
