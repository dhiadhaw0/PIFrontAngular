import { Component } from '@angular/core'
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider'

@Component({
  selector: 'cab-list-filter',
  standalone: true,
  imports: [NgxSliderModule],
  templateUrl: './cablistfilter.component.html',
  styles: `
    :host(cab-list-filter) {
      display: contents !important;
    }
  `,
})
export class CablistfilterComponent {
  // Range slider value set
  value: number = 700
  highValue: number = 1500
  options: Options = {
    floor: 500,
    ceil: 2000,
  }
}
