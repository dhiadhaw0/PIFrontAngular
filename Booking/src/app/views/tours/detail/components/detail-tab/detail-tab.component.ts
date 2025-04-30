import { Component } from '@angular/core'
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import {
  aboutTour,
  cancellationPolicy,
  exclusionList,
  facility,
  highlights,
  inclusionsList,
  roomImages,
  tourInfo,
} from '../../data'
import { RouterModule } from '@angular/router'
import { PricingComponent } from '../pricing/pricing.component'

@Component({
  selector: 'detail-tab',
  standalone: true,
  imports: [NgbNavModule, NgbAccordionModule, RouterModule, PricingComponent],
  templateUrl: './detail-tab.component.html',
  styles: ``,
})
export class DetailTabComponent {
  highlights = highlights
  aboutTour = aboutTour
  exclusionList = exclusionList
  facility = facility
  roomImages = roomImages
  cancellationPolicy = cancellationPolicy
  inclusionsList = inclusionsList
  tourInfo = tourInfo
}
