import { Component, ViewChild } from '@angular/core'
import { hotels } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'
import { CommonModule } from '@angular/common'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'grid-gridlist',
  standalone: true,
  imports: [
    TinySliderComponent,
    CommonModule,
    NgbPaginationModule,
    RouterModule,
  ],
  templateUrl: './gridlist.component.html',
  styles: ``,
})
export class GridlistComponent {
  gridData = hotels
  currencyType = currency

  @ViewChild('gridSlider', { static: false }) gridSlider: any

  gridSliderSetting: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
  }
}
