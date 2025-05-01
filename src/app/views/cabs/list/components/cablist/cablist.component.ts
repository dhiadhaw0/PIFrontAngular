import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Renderer2,
  type TemplateRef,
} from '@angular/core'
import { CablistfilterComponent } from '../cablistfilter/cablistfilter.component'
import { CabalertComponent } from '../cabalert/cabalert.component'
import { cabsLists } from '../../data'
import {
  NgbOffcanvas,
  NgbOffcanvasModule,
  NgbPaginationModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { StickyDirective } from '@/app/directives/sticky.directive'
import { currency } from '@/app/store'

@Component({
  selector: 'cab-list',
  standalone: true,
  imports: [
    CablistfilterComponent,
    CabalertComponent,
    NgbPaginationModule,
    NgbRatingModule,
    NgbOffcanvasModule,
    RouterModule,
    StickyDirective,
  ],
  templateUrl: './cablist.component.html',
  styles: `
    :host(cab-list) {
      display: contents !important;
    }
  `,
})
export class CablistComponent implements OnInit {
  cabsLists = cabsLists
  currencyType = currency

  public renderer = inject(Renderer2)
  public eleRef = inject(ElementRef)
  private offcanvasService = inject(NgbOffcanvas)

  ngOnInit() {}

  openFilter(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
