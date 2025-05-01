import {
  Component,
  inject,
  OnInit,
  Renderer2,
  type TemplateRef,
} from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { CablistComponent } from './components/cablist/cablist.component'
import { Footer1Component } from './components/footer1/footer1.component'
import { cabsLists } from './data'
import {
  NgbAlertModule,
  NgbOffcanvas,
  NgbPaginationModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { NgxSliderModule, type Options } from '@angular-slider/ngx-slider'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    CablistComponent,
    Footer1Component,
    NgbAlertModule,
    NgbPaginationModule,
    NgbRatingModule,
    NgxSliderModule,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent implements OnInit {
  cabsLists = cabsLists
  topLinks = topLinks
  footerLinks = footerLinks

  value: number = 700
  highValue: number = 1500
  options: Options = {
    floor: 500,
    ceil: 2000,
  }

  private offcanvasService = inject(NgbOffcanvas)

  ngOnInit() {}

  openFilter(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
