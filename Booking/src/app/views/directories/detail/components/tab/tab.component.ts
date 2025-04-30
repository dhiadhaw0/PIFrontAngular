import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { directoryDeals, sliderItems } from '../../data'
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'

@Component({
  selector: 'detail-tab',
  standalone: true,
  imports: [NgbNavModule, CommonModule, NgbDropdownModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  sliderItems = sliderItems
  directoryDeals = directoryDeals
  currencyType = currency
}
